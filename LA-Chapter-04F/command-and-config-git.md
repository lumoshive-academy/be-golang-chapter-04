# Cara melakukan konfigurasi

Panduan langkah-langkah melakukan konfigurasi awal di git.

## Konfigurasi Awal Git

Setelah Git terinstal, Anda perlu mengonfigurasi nama pengguna dan email yang akan dicatat pada setiap commit yang Anda buat.

### Langkah 1: Konfigurasi Nama Pengguna dan Email
- Jalankan perintah berikut di terminal untuk mengonfigurasi Git:
```bash
git config --global user.name "Nama Anda"
git config --global user.email "email@example.com"

```

### Langkah 2: Verifikasi Konfigurasi
- Untuk melihat konfigurasi yang telah Anda buat, jalankan perintah berikut:
```bash
git config --list

```

## perintah dasar pada git

Git memiliki berbagai perintah untuk membantu dalam pengelolaan versi kode sumber. Berikut adalah beberapa perintah dasar Git yang sering digunakan:

### 1. Membuat Repository Git Baru
- Menginisialisasi repository Git di folder lokal:
```bash
git init

```

### 2. Memeriksa Status Repository
- Melihat status file dalam repository:
```bash
git status

```

### 3. Menambah File ke Staging Area
- Menambah file tertentu ke staging area:
```bash
git status

```
- Menambah semua file yang diubah ke staging area:
```bash
git add .

```

### 4. Melakukan Commit
- Commit perubahan dengan pesan:
```bash
git commit -m "Pesan commit"

```
- Commit perubahan yang sudah di-stage dan membuka teks editor untuk menulis pesan:
```bash
git commit -am "Pesan commit"

```

### 5. Melihat Riwayat Commit
- Menampilkan riwayat commit:
```bash
git log

```

### 6. Membuat dan Berpindah Branch
- Membuat branch baru:
```bash
git branch nama_branch

```
- git branch nama_branch:
```bash
git checkout nama_branch

```
- Membuat dan langsung berpindah ke branch baru:
```bash
git checkout -b nama_branch

```

### 7. Menggabungkan Branch
- Menggabungkan branch tertentu ke branch saat ini:
```bash
git merge nama_branch

```

### 8. Menghapus Branch
- Menghapus branch lokal:
```bash
git branch -d nama_branch

```