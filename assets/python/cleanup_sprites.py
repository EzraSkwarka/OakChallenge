import os
import sys

def cleanup_directory(path):
    if not os.path.isdir(path):
        print(f"Error: '{path}' is not a valid directory")
        sys.exit(1)

    for name in os.listdir(path):
        full_path = os.path.join(path, name)

        if not os.path.isfile(full_path):
            continue

        if "_f" in name:
            os.remove(full_path)
            print(f"Deleted: {name}")
            continue

        base, ext = os.path.splitext(name)
        if base.endswith("_m"):
            new_name = base[:-2] + ext
            new_path = os.path.join(path, new_name)

            if not os.path.exists(new_path):
                os.rename(full_path, new_path)
                print(f"Renamed: {name} -> {new_name}")
            else:
                print(f"Skipped rename (exists): {new_name}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python cleanup_sprites.py <directory>")
        sys.exit(1)

    cleanup_directory(sys.argv[1])
