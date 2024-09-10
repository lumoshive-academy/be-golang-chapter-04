# Perintah Dasar bekerja dengan remote repository

## 1. Menghubungkan Repository Lokal dengan Remote Repository
- Menambahkan remote repository:
```bash
git remote add origin https://url-repository.git

```
- Melihat daftar remote repository:
```bash
git remote -v

```

## 2. Mengirim Perubahan ke Remote Repository
- Push perubahan ke remote repository (branch utama, biasanya main atau master):
```bash
git push origin main

```

## 3. Mengambil Perubahan dari Remote Repository
- Mengambil update dari remote repository:
```bash
git pull origin main

```
- Mengambil update dari remote repository tanpa menggabungkannya secara otomatis (hanya menarik perubahan):
```bash
git fetch origin

```

## 4. Meng-clone Repository dari Remote
- Meng-clone repository dari remote ke lokal:
```bash
git clone https://url-repository.git

```