async function createKomik(database, komikData) {
  const newKomik = await database.Komik.create({
    title: komikData.title,
    description: komikData.description,
    author: komikData.author,
    ImageType: komikData.ImageType || komikData.imageType || null,
    ImageName: komikData.ImageName || komikData.imageName || null,
    ImageData: komikData.ImageData || komikData.imageData || null,
  });

  return newKomik;
}

async function getAllKomik(database) {
  const komiks = await database.Komik.findAll();

  return komiks.map((k) => {
    if (k.ImageData) {
      k.ImageData = k.ImageData.toString("base64");
    }
    return k;
  });
}

async function getKomikById(database, id) {
  const komik = await database.Komik.findByPk(id);
  if (!komik) throw new Error(`Komik dengan ID ${id} tidak ditemukan`);

  if (komik.ImageData) {
    komik.ImageData = komik.ImageData.toString("base64");
  }

  return komik;
}

async function updateKomik(database, id, komikData) {
  const komik = await database.Komik.findByPk(id);

  if (!komik) {
    throw new Error(`Komik dengan ID ${id} tidak ditemukan`);
  }

  const updateData = {
    title: komikData.title,
    description: komikData.description,
    author: komikData.author,
  };

  if (komikData.ImageType || komikData.imageType) {
    updateData.ImageType = komikData.ImageType || komikData.imageType;
    updateData.ImageName = komikData.ImageName || komikData.imageName;
    updateData.ImageData = komikData.ImageData || komikData.imageData;
  }

  await komik.update(updateData);
  return komik;
}

async function deleteKomik(database, id) {
  const komik = await database.Komik.findByPk(id);

  if (!komik) {
    throw new Error(`Komik dengan ID ${id} tidak ditemukan`);
  }

  await komik.destroy();
  return { message: `Komik dengan ID ${id} berhasil dihapus` };
}

module.exports = {
  createKomik,
  getAllKomik,
  getKomikById,
  updateKomik,
  deleteKomik,
};