# Attribut
| Attr      | Tipe Data |Deskripsi|
| ----------- | ----------- |----------- |
| username      | string       |username akun|
| password      | string       |password akun|
| judul      | string       |judul note todo|
| judulBaru      | string       |judul Baru note todo|
| deskripsi      | string       |isi note todo|

# Akun
## Signin
* url : /auth/signin/
* method : post  

| Attr      | Tipe Data |Deskripsi|  
| ----------- | ----------- |----------- |  
| username      | string       |username akun|
| password      | string       |password akun|

```json
{
    "username":"username",
    "password":"password"
}
```
## Signup
* url : /auth/signup/
* method : post  

| Attr      | Tipe Data |Deskripsi|  
| ----------- | ----------- |----------- |  
| username      | string       |username akun|
| password      | string       |password akun|

```json
{
    "username":"username",
    "password":"password"
}
```
# Memakai note
## Menambah note
* url : /todo/add/
* method : post  

| judul      | string       |judul note todo|
| deskripsi      | string       |isi note todo|

```json
{
    "judul":"judulnya",
    "deskripsi":"deskripsinya"
}
```
## Melihat semua note
* url : /todo/show/all
* method : get  
## Melihat note
* url : /todo/show/
* method : post  

| judul      | string       |judul note todo|

```json
{
    "judul":"judulnya",
}
```
## Mengubah judul note
* url : /todo/update/
* method : post  

| judul      | string       |judul note todo|
| judulBaru      | string       |judul Baru note todo|

```json
{
    "judul":"judul lama",
    "judulBaru":"judul baru"
}
```
## Mengubah deskripsi note
* url : /todo/update/deskripsi
* method : post  

| judul      | string       |judul note todo|
| deskripsi      | string       |isi note todo|

```json
{
    "judul":"judulnya",
    "deskripsi":"deskripsinya"
}
```
## Menghapus note
* url : /todo/delete/
* method : post  

| judul      | string       |judul note todo|

```json
{
    "judul":"judulnya",
}
```
## Menghapus semua
* url : /todo/delete/all
* method : get  

**Mohon maaf jika dokumentasinya seperti ini karena saya saat ini dalam keadaan kurang sehat mohon permakluman.**