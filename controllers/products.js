const getAllProducts = async(req,res) => {
    res.status(200).json({msg: "Get All Products"})
}

const getAllProductsTesting = async(req,res) => {
    res.status(200).json({msg: "Get All Products Testing"})
}

module.exports = {
    getAllProducts,
    getAllProductsTesting
}