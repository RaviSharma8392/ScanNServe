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
    getById: async function(){
        const doc = await model.findById(id);
        return doc;
    },
    delete: async function(){
        const response = await model.findByIdAndDelete(id);
        return doc;
    },
    update: async function(data){
        const updatedDoc = await model.findByIdAndUpdate(id,data,{new: true});
        return doc;
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