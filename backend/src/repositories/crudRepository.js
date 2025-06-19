const crudRepository = (model) => {
return {
    create: async function (data) {
        const newDoc = new model(data);
        await newDoc.save();
        return newDoc;
    },
    getAll: async function(){
        const allDocs = await model.find();
        return allDocs;
    },
    getById: async function(id){
        const doc = await model.findById(id);
        return doc;
    },
    delete: async function(id){
        const response = await model.findByIdAndDelete(id);
        return response;
    },
    update: async function(_id,data){
const updatedDoc = await model.findByIdAndUpdate(_id, data, { new: true });
        return updatedDoc;

    },
    deleteMany: async function(docIds){
        const response = await model.deleteMany({
            _id: {
                $in: docIds
            }
        })
        return docIds
    }

}
}
module.exports = crudRepository;