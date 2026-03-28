import os
import sys

def purge_paths(paths):
    for raw_path in paths:
        path = raw_path.strip()

        if not path:
            continue

        if not os.path.exists(path):
            print(f"Not found: {path}")
            continue

        if not os.path.isfile(path):
            print(f"Skipped (not a file): {path}")
            continue

        os.remove(path)
        print(f"Deleted: {path}")

def main():
    paths = []

    if not sys.stdin.isatty():
        paths = sys.stdin.read().splitlines()
    else:
        paths = sys.argv[1:]

    if not paths:
        print("Usage:")
        print("  python purge_sprites.py <path1> [path2 path3 ...]")
        print("  or pipe a list of paths via stdin")
        sys.exit(1)

    purge_paths(paths)

if __name__ == "__main__":
    main()
