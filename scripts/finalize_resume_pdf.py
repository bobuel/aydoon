"""Finalize resume PDF metadata and preserve its links."""

from __future__ import annotations

import argparse
from pathlib import Path

from pypdf import PdfReader, PdfWriter


def finalize(source, destination):
    reader = PdfReader(source)
    writer = PdfWriter()
    writer.clone_document_from_reader(reader)
    writer.add_metadata(
        {
            "/Title": "Alexander Aidun Resume",
            "/Author": "Alexander Aidun",
            "/Subject": "Enterprise AI Product, Operations and Adoption Leadership",
            "/Keywords": "enterprise AI, AI operations, AI product management, AI adoption, systems design",
        }
    )
    destination.parent.mkdir(parents=True, exist_ok=True)
    with destination.open("wb") as stream:
        writer.write(stream)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    parser.add_argument("destination", type=Path)
    args = parser.parse_args()
    finalize(args.source.resolve(), args.destination.resolve())
    print(args.destination.resolve())


if __name__ == "__main__":
    main()
