import contactModel from "../models/contacts.js"

export const getAll = async (req, res) => {
  try {
    const posts = await contactModel.find();
    res.json(posts)
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "не удалось получить посты"
    })
  }
}

export const create = async (req, res) => {
  try {
    const doc = new contactModel({
      whatsapp: req.body.whatsapp,
      phone: req.body.phone,
      email: req.body.email,
      details: req.body.details,
    });

    const post = await doc.save();

    res.json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось создать статью',
    });
  }
};

// export const getOne = async (req, res) => {
//   try {
//     const postId = req.params.id;

//     const getOnePost = await PostModel.findOneAndUpdate(
//       {
//         _id: postId,
//       },
//       {
//         $inc: { viewsCount: 1 },
//       },
//       {
//         returnDocument: 'after',
//       },

//     ).then((doc, err) => {
//         if(err){
//          return res.status(404).json({
//             message: 'Не удалось найти статью',
//           })
//         }
//         if(!doc){
//           return res.status(404).json({
//             message: "Статья была удалена или не существут"
//           })
//         }
//         return res.status(200).json(doc)
//       },)
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({
//       message: 'Не удалось получить статью',
//     });
//   }
// };


// export const remove = async (req, res) => {
//   try{
//     const postId = req.params.id;

//     await PostModel.findOneAndDelete(
//       {
//         _id: postId,
//       },).then((doc, err) => {
//         if(err){
//           return res.status(404).json({
//             message: 'Не удалось найти статью',
//           })
//         }
//         res.status(200).json({
//           message: "Статья удалена", 
//           doc
//         })
//       })
//   } catch {
//     console.log(err);
//     res.status(500).json({
//       message: 'Не удалось получить статью',
//     });
//   }
// }

export const update = async (req, res) => {
  try{
    const postId = req.params.id;

    await contactModel.updateOne({
      _id: postId,
    },{
      email: req.body.email,
      phone: req.body.phone,
      whatsapp: req.body.whatsapp,
      details: req.body.details,
    }).then((doc, err) => {
      res.json({
        message: "Данные успешно изменены",
        data: doc
      })
    })
  } catch(err){
    console.log(err);
    res.status(500).json({
      message: 'Не удалось изменить данные',
    });
  }
}