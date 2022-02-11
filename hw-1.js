const folders = [
  {
    id: 5,
    name: 'Klasör 1',
    files: [
      { id: 17, name: 'profil.jpg' },
      { id: 18, name: 'manzara.jpg'},
    ],
  },
  {
    id: 6,
    name: 'Klasör 2',
    files: [
      { id: 21, name: 'foto.png' },
      { id: 22, name: 'dosya.xls' },
    ],
  },
  {
    id: 7,
    name: 'Klasör 3',
  },
]

// *** move(17,6) *** // dosyayı klasöre taşıyacak
// function move(fileID, olderID){

// }
const findFilesId = (id) => {
  const folder = folders.find((folder) => folder.files && folder.files.find((file) => file.id === id));
  console.log(folder.files);
} 

const move = (fileID, folderID) => {
  
} 

// copy(18,7) // kopyasını oluşturacak
// remove(17) // dosyayı silecek
// removeFolder(6) //klasörü ve altındaki tüm dosyaları silecek
// parentFolderOf(17) // ==> 5

findFilesId(17);