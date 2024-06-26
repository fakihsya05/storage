import Product from "../models/ProductModels.js";
import path from "path";
import fs from "fs";

export const updateProduct = async (req, res) => {
    const product = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!product) return res.status(404).json({ msg: "No Product Found" });
  
    let fileName = "";
    if (req.files === null) {
      fileName = Product.foto;
    } else {
      const file = req.files.file;
      const fileSize = file.data.length;
      const ext = path.extname(file.name);
      fileName = file.md5 + ext;
      const allowedType = [".png", ".jpg", ".jpeg"];
  
      if (!allowedType.includes(ext.toLocaleLowerCase()))
        return res.status(422).json({ msg: "Invalid Images" });
      if (fileSize > 5000000)
        return res.status(422).json({ msg: "Image must be less 5mb" });
  
      const filepath = `./uploads/images/${product.foto}`;
      fs.unlinkSync(filepath);
  
      file.mv(`./uploads/images/${fileName}`, (err) => {
        if (err) return res.status(500).json({ msg: err.message });
      });
    }
    const namaproperti = req.body.title;
    const {
      namepemilik,
      email,
      nomerhp,
      tipeproperti,
      alamat,
      jumlahkamar,
      userId,
    } = req.body;
  
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  
    try {
      await Product.update(
        {
          namepemilik: namepemilik,
          email: email,
          nomerhp: nomerhp,
          namaproperti: namaproperti,
          tipeproperti: tipeproperti,
          alamat: alamat,
          jumlahkamar: jumlahkamar,
          foto: fileName,
          url: url,
          userId: userId,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json({ msg: "Update Iklan Properti Succes" });
    } catch (error) {
      console.log(error.message);
    }
  };