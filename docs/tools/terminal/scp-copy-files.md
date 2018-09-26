# SCP Commands

## Files: Tar/Gzip a Directory

```bash
tar czf name_of_archive_file.tar.gz name_of_directory_to_tar
```

## SCP: Base Syntax

```bash
scp username@source:/location/to/file username@destination:/where/to/put
```

## SCP: Local -> Remote

```bash
scp /file/to/send username@remote:/where/to/put
```

## SCP: Remote -> Local

```bash
scp username@remote:/file/to/send /where/to/put
```
