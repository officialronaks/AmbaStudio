const {MongoClient, ObjectId}=require("mongodb")

const url='mongodb://localhost:27017'

const getDb=()=>{
    const client=new MongoClient(url)
    const db=client.db('herosdb')
    console.log('database connected')
    return db

}
const getCollection = async (collName)=>{
    const db=await getDb()
    const students = await db.collection(collName)
    return students
}


const show=async()=>{
    const collName=await getCollection('heros')
    const col=await collName.find()
    return col
}

const add = async (object)=>{
    const collName= await getCollection('heros')
    collName.insertOne(object)
}


const drop = async (id)=>{
    const collName = await getCollection('heros')
    return await collName.deleteOne({_id:ObjectId(id)})
}


const update = async (id,object)=>{
    const collName = await getCollection('heros')
    return await collName.findOneAndUpdate({_id:ObjectId(id)},{$set:object})
}

const del = async (id)=>{
    const collName=await getCollection('heros')
    return await collName.deleteMany({_id:ObjectId(id)})
}

const photo = async(link)=>{
    const collName=await getCollection('heros')
    return await collName.insertOne(link)
}

module.exports={
    show,add,drop,update,del,photo
}