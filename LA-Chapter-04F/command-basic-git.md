## Perintah Dasar Pada Git

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