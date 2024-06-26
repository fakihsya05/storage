import User from "../models/UserModel.js";
import argon2 from "argon2";

export const Register = async (req, res) => {
  const { username, password, confPassword, img } = req.body;
  if (password !== confPassword)
    return res.status(400).json({ msg: "Password Not Same" });
  const hashPassword = await argon2.hash(password);
  try {
    await User.create({
      username: username,
      password: hashPassword,
      img: img,
    });
    res.status(201).json({ msg: "Register Success" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};


// export const uploadImage = async (req, res) => {
//   const user = await User.findOne({
//     where: {
//       id: req.params.id,
//     },
//   });

//   if (!user) {
//     return res.status(404).json({ msg: "User Not Exist" });
//   }

//   let { img } = req.body;

//   // Validasi img tidak boleh kosong
//   if (!img) {
//     return res.status(400).json({ msg: "Image cannot be empty" });
//   }

//   try {
//     await User.update(
//       {
//         img: img,
//       },
//       {
//         where: {
//           id: user.id,
//         },
//       }
//     );

//     res.status(200).json({ msg: "User Updated" });
//   } catch (error) {
//     res.status(400).json({ msg: error.message });
//   }
// };

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // Folder tempat menyimpan file
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname); // Nama file yang disimpan
//   }
// });

// Contoh penggunaan di endpoint uploadImage
export const uploadImage = async (req, res) => {
  const user = await User.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!user) {
    return res.status(404).json({ msg: "User Not Exist" });
  }

 
  if (!req.file) {
    return res.status(400).json({ msg: "Image file not uploaded" });
  }

  const img = req.file.filename; // Mendapatkan nama file dari req.file

  try {
    await User.update(
      {
        img: img,
      },
      {
        where: {
          id: user.id,
        },
      }
    );

    res.status(200).json({ msg: "Image Uploaded" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};


