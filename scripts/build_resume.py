"""Build Alex Aidun's one-page, ATS-friendly executive resume."""

from __future__ import annotations

import argparse
from pathlib import Path

from docx import Document
from docx.enum.style import WD_STYLE_TYPE
from docx.enum.text import WD_LINE_SPACING, WD_TAB_ALIGNMENT
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Inches, Pt, RGBColor


NAVY = RGBColor(0x14, 0x21, 0x3D)
BLUE = RGBColor(0x33, 0x5C, 0xFF)
MUTED = RGBColor(0x5C, 0x68, 0x78)
LINE = "DFE4DC"
FONT = "Arial"

# compact_reference_guide with a named one_page_resume override. The user
# explicitly requested one page, flush-left evidence lines, and no wrapped
# company/role/date rows.
PAGE_WIDTH_IN = 8.5
PAGE_HEIGHT_IN = 11.0
MARGIN_X_IN = 0.46
MARGIN_TOP_IN = 0.42
MARGIN_BOTTOM_IN = 0.40
CONTENT_WIDTH_IN = PAGE_WIDTH_IN - (2 * MARGIN_X_IN)
BODY_SIZE_PT = 9.1


def set_run_font(run, *, size=None, color=None, bold=None, italic=None):
    run.font.name = FONT
    run._element.get_or_add_rPr().rFonts.set(qn("w:ascii"), FONT)
    run._element.get_or_add_rPr().rFonts.set(qn("w:hAnsi"), FONT)
    if size is not None:
        run.font.size = Pt(size)
    if color is not None:
        run.font.color.rgb = color
    if bold is not None:
        run.bold = bold
    if italic is not None:
        run.italic = italic


def add_hyperlink(paragraph, text, url, *, color=MUTED):
    relationship_id = paragraph.part.relate_to(
        url,
        "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
        is_external=True,
    )
    hyperlink = OxmlElement("w:hyperlink")
    hyperlink.set(qn("r:id"), relationship_id)
    run = OxmlElement("w:r")
    run_properties = OxmlElement("w:rPr")
    run_fonts = OxmlElement("w:rFonts")
    run_fonts.set(qn("w:ascii"), FONT)
    run_fonts.set(qn("w:hAnsi"), FONT)
    run_properties.append(run_fonts)
    run_color = OxmlElement("w:color")
    run_color.set(qn("w:val"), str(color))
    run_properties.append(run_color)
    run_size = OxmlElement("w:sz")
    run_size.set(qn("w:val"), "17")
    run_properties.append(run_size)
    run.append(run_properties)
    text_node = OxmlElement("w:t")
    text_node.text = text
    run.append(text_node)
    hyperlink.append(run)
    paragraph._p.append(hyperlink)


def add_bottom_border(paragraph, color=LINE, size=6, space=1):
    p_pr = paragraph._p.get_or_add_pPr()
    p_bdr = OxmlElement("w:pBdr")
    bottom = OxmlElement("w:bottom")
    bottom.set(qn("w:val"), "single")
    bottom.set(qn("w:sz"), str(size))
    bottom.set(qn("w:space"), str(space))
    bottom.set(qn("w:color"), color)
    p_bdr.append(bottom)
    p_pr.append(p_bdr)


def setup_page(doc):
    section = doc.sections[0]
    section.page_width = Inches(PAGE_WIDTH_IN)
    section.page_height = Inches(PAGE_HEIGHT_IN)
    section.left_margin = Inches(MARGIN_X_IN)
    section.right_margin = Inches(MARGIN_X_IN)
    section.top_margin = Inches(MARGIN_TOP_IN)
    section.bottom_margin = Inches(MARGIN_BOTTOM_IN)
    section.header_distance = Inches(0.2)
    section.footer_distance = Inches(0.2)
    section.header.paragraphs[0].text = ""
    section.footer.paragraphs[0].text = ""


def setup_styles(doc):
    normal = doc.styles["Normal"]
    normal.font.name = FONT
    normal._element.rPr.rFonts.set(qn("w:ascii"), FONT)
    normal._element.rPr.rFonts.set(qn("w:hAnsi"), FONT)
    normal.font.size = Pt(BODY_SIZE_PT)
    normal.font.color.rgb = NAVY
    normal.paragraph_format.space_before = Pt(0)
    normal.paragraph_format.space_after = Pt(0)
    normal.paragraph_format.line_spacing_rule = WD_LINE_SPACING.SINGLE
    normal.paragraph_format.keep_together = True

    name = doc.styles.add_style("Resume Name One Page", WD_STYLE_TYPE.PARAGRAPH)
    name.font.name = FONT
    name._element.rPr.rFonts.set(qn("w:ascii"), FONT)
    name._element.rPr.rFonts.set(qn("w:hAnsi"), FONT)
    name.font.size = Pt(24)
    name.font.bold = True
    name.font.color.rgb = NAVY
    name.paragraph_format.space_after = Pt(1)
    name.paragraph_format.line_spacing = 1.0

    title = doc.styles.add_style("Resume Title One Page", WD_STYLE_TYPE.PARAGRAPH)
    title.font.name = FONT
    title._element.rPr.rFonts.set(qn("w:ascii"), FONT)
    title._element.rPr.rFonts.set(qn("w:hAnsi"), FONT)
    title.font.size = Pt(11.2)
    title.font.bold = True
    title.font.color.rgb = BLUE
    title.paragraph_format.space_after = Pt(3)
    title.paragraph_format.line_spacing = 1.0

    contact = doc.styles.add_style("Resume Contact One Page", WD_STYLE_TYPE.PARAGRAPH)
    contact.font.name = FONT
    contact._element.rPr.rFonts.set(qn("w:ascii"), FONT)
    contact._element.rPr.rFonts.set(qn("w:hAnsi"), FONT)
    contact.font.size = Pt(8.4)
    contact.font.color.rgb = MUTED
    contact.paragraph_format.space_after = Pt(5)
    contact.paragraph_format.line_spacing = 1.0

    heading = doc.styles["Heading 1"]
    heading.font.name = FONT
    heading._element.rPr.rFonts.set(qn("w:ascii"), FONT)
    heading._element.rPr.rFonts.set(qn("w:hAnsi"), FONT)
    heading.font.size = Pt(9.7)
    heading.font.bold = True
    heading.font.color.rgb = BLUE
    heading.paragraph_format.space_before = Pt(6)
    heading.paragraph_format.space_after = Pt(3)
    heading.paragraph_format.line_spacing = 1.0
    heading.paragraph_format.keep_with_next = True
    heading.paragraph_format.keep_together = True

    core = doc.styles.add_style("Core Line One Page", WD_STYLE_TYPE.PARAGRAPH)
    core.font.name = FONT
    core._element.rPr.rFonts.set(qn("w:ascii"), FONT)
    core._element.rPr.rFonts.set(qn("w:hAnsi"), FONT)
    core.font.size = Pt(8.9)
    core.font.color.rgb = NAVY
    core.paragraph_format.space_after = Pt(4)
    core.paragraph_format.line_spacing = 1.0
    core.paragraph_format.keep_together = True

    job = doc.styles.add_style("Job Header One Page", WD_STYLE_TYPE.PARAGRAPH)
    job.font.name = FONT
    job._element.rPr.rFonts.set(qn("w:ascii"), FONT)
    job._element.rPr.rFonts.set(qn("w:hAnsi"), FONT)
    job.font.size = Pt(8.9)
    job.font.color.rgb = NAVY
    job.paragraph_format.space_before = Pt(4.5)
    job.paragraph_format.space_after = Pt(1.2)
    job.paragraph_format.line_spacing = 1.0
    job.paragraph_format.keep_with_next = True
    job.paragraph_format.keep_together = True
    job.paragraph_format.tab_stops.add_tab_stop(
        Inches(CONTENT_WIDTH_IN), WD_TAB_ALIGNMENT.RIGHT
    )

    impact = doc.styles.add_style("Impact Line One Page", WD_STYLE_TYPE.PARAGRAPH)
    impact.font.name = FONT
    impact._element.rPr.rFonts.set(qn("w:ascii"), FONT)
    impact._element.rPr.rFonts.set(qn("w:hAnsi"), FONT)
    impact.font.size = Pt(BODY_SIZE_PT)
    impact.font.color.rgb = NAVY
    impact.paragraph_format.left_indent = Inches(0)
    impact.paragraph_format.first_line_indent = Inches(0)
    impact.paragraph_format.space_before = Pt(0)
    impact.paragraph_format.space_after = Pt(2.1)
    impact.paragraph_format.line_spacing = 1.0
    impact.paragraph_format.keep_together = True


def add_section_heading(doc, text):
    paragraph = doc.add_paragraph(style="Heading 1")
    run = paragraph.add_run(text.upper())
    set_run_font(run, size=9.7, color=BLUE, bold=True)
    add_bottom_border(paragraph)
    return paragraph


def add_job_header(doc, company, role, period):
    paragraph = doc.add_paragraph(style="Job Header One Page")
    company_run = paragraph.add_run(company.upper())
    set_run_font(company_run, size=8.9, color=NAVY, bold=True)
    role_run = paragraph.add_run(f" | {role}")
    set_run_font(role_run, size=8.9, color=MUTED)
    if period:
        paragraph.add_run("\t")
        period_run = paragraph.add_run(period)
        set_run_font(period_run, size=8.3, color=MUTED, bold=True)


def add_impact(doc, lead, text):
    paragraph = doc.add_paragraph(style="Impact Line One Page")
    lead_run = paragraph.add_run(f"{lead}  ")
    set_run_font(lead_run, size=BODY_SIZE_PT, color=BLUE, bold=True)
    text_run = paragraph.add_run(text)
    set_run_font(text_run, size=BODY_SIZE_PT, color=NAVY)


def add_header(doc):
    name = doc.add_paragraph(style="Resume Name One Page")
    set_run_font(name.add_run("Alexander Aidun"), size=24, color=NAVY, bold=True)

    title = doc.add_paragraph(style="Resume Title One Page")
    set_run_font(
        title.add_run("Enterprise AI Product, Operations & Adoption Leader"),
        size=11.2,
        color=BLUE,
        bold=True,
    )

    contact = doc.add_paragraph(style="Resume Contact One Page")
    set_run_font(contact.add_run("New York, NY | 917-282-1668 | "), size=8.4, color=MUTED)
    add_hyperlink(contact, "bobuel@gmail.com", "mailto:bobuel@gmail.com")
    set_run_font(contact.add_run(" | "), size=8.4, color=MUTED)
    add_hyperlink(contact, "linkedin.com/in/aaidun", "https://www.linkedin.com/in/aaidun/")
    set_run_font(contact.add_run(" | "), size=8.4, color=MUTED)
    add_hyperlink(contact, "aydoon.com", "https://aydoon.com")
    set_run_font(contact.add_run(" | "), size=8.4, color=MUTED)
    add_hyperlink(contact, "github.com/bobuel", "https://github.com/bobuel")


def build_resume(output_path):
    doc = Document()
    doc.core_properties.title = "Alexander Aidun Resume"
    doc.core_properties.subject = "Enterprise AI Product, Operations and Adoption Leadership"
    doc.core_properties.author = "Alexander Aidun"
    doc.core_properties.keywords = (
        "enterprise AI, AI operations, AI product management, AI adoption, systems design"
    )
    doc.core_properties.comments = "Employer-facing one-page resume"

    setup_page(doc)
    setup_styles(doc)
    add_header(doc)

    add_section_heading(doc, "Core")
    core = doc.add_paragraph(style="Core Line One Page")
    set_run_font(
        core.add_run(
            "AI operations | AI product strategy | Systems design | Agentic workflows | "
            "Adoption | Enablement | Executive advisory | Prototyping"
        ),
        size=8.55,
        color=NAVY,
    )

    add_section_heading(doc, "Experience")

    add_job_header(doc, "Automattic", "AI Adoption Manager", "Mar 2026 - Present")
    add_impact(doc, "OPERATE", "ChatGPT and Claude for 1,500 employees, including functional and cost operations.")
    add_impact(doc, "OWN", "AI Agent, AI Learning, LibreChat, and Slack automations across product, guidance, and adoption.")
    add_impact(doc, "ENABLE", "Publish 2-3 how-to articles weekly, lead AI Guides, and scope executive AI use cases.")

    add_job_header(doc, "Dremio", "Senior AI PM + Director, Education & Documentation", "Jan 2024 - Mar 2026")
    add_impact(doc, "LEAD", "Four AI initiatives: AI Agent, MCP Server, AI SQL Functions, and Data Analyst chatbot.")
    add_impact(doc, "DISCOVER", "Converted customer research into roadmap priorities with Design and Engineering.")
    add_impact(doc, "AUTOMATE", "Owned Documentation and DremioU; built automation with Zapier, OpenAI, Jira, GitHub, and MCP.")
    add_impact(doc, "SCALE", "Separately grew DremioU to 3,200+ users, 1,000+ badges, +78 NPS, and 50% completion.")

    add_job_header(doc, "Braze", "Senior Manager, Partner Education", "Nov 2022 - Jan 2024")
    add_impact(doc, "MODERNIZE", "Led global partner education; used generative AI to replace live mock testing and speed content.")

    add_job_header(doc, "Arrikto", "Global Director, Education", "Sep 2021 - Aug 2022")
    add_impact(doc, "GROW", "Reached 32% weekly course completion, 750+ registrants, and 1,400 enrollments in six months.")

    add_job_header(doc, "WorkFusion", "Director, Product Enablement / Education / Documentation", "Jan 2021 - Aug 2021")
    add_impact(doc, "ALIGN", "Led distributed Documentation, Education, and Enablement teams across the US, Europe, and India.")

    add_job_header(doc, "Qubole", "Global Director, Education Services & Technical Publications", "Dec 2015 - Dec 2020")
    add_impact(doc, "BUILD", "Owned customer education, technical onboarding, partner certification, and technical publications.")
    add_impact(doc, "MONETIZE", "Built education packages up to $300K; led a 10-person team; implemented Pendo onboarding and telemetry.")

    add_job_header(doc, "Earlier", "MarketShare - Data Strategy | Data Meaning - Technical Lead | MicroStrategy - Education + Support", "")

    add_section_heading(doc, "Selected AI Builds")
    add_impact(doc, "CERTIFYFAST", "Source-grounded certification workflow with traceability for expert review.")
    add_impact(doc, "BLOOM", "Turned a 1,000+ use signal into an assessment workflow with source evidence and teacher checkpoints.")
    add_impact(doc, "RETRIEVAL GUARD", "Experimental Python toolkit for retrieval regression testing and near-miss filtering.")

    add_section_heading(doc, "Education & Service")
    add_impact(doc, "CORNELL", "School of Engineering - Information Science, Systems and Technology")
    add_impact(doc, "BECKET YMCA", "Alumni Council / Ambassador, Jan 2017 - Present")

    output_path.parent.mkdir(parents=True, exist_ok=True)
    doc.save(output_path)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--output",
        type=Path,
        default=Path("docs/resume/alexander-aidun-resume.docx"),
    )
    args = parser.parse_args()
    build_resume(args.output.resolve())
    print(args.output.resolve())


if __name__ == "__main__":
    main()
