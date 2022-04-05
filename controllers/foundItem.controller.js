import FoundItem from "../models/foundItem.model.js";

export const postFoundItem = async (req, res) => {
  const { title, location, description, images, tags } = req.body;

  if (!title || !images) {
    return res
      .status(200)
      .send({ ok: false, message: "Please fill all the required fields!" });
  }

  const foundItem = new FoundItem({
    title,
    location,
    description,
    images,
    founder: req.user._id,
    tags,
  });

  await foundItem.save();

  return res
    .status(200)
    .send({ ok: true, message: "Item successfully posted!", foundItem });
};


export const getAllFoundItems = async (req,res)=> {
    const items = await FoundItem.find({});
    return res.status(200).send({ok:true,message:"Items successfully fetched from db",items});

}


export const getOneFoundItem = async (req,res) => {
    const {id } = req.params;
    if(!id){
        return res.status(200).send({ok:false,message:"id cannot be null"});
    }

    const item = await FoundItem.findById(id);

    if(item){
        return res.status(200).send({ok:true,message:"Item successfully found",item});

    }
    return res.send(200).send({ok:false,message:"Item not found!"})

}

