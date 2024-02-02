migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("matb4hahzshobj6")

  // remove
  collection.schema.removeField("28vi4br6")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("matb4hahzshobj6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "28vi4br6",
    "name": "commentcount",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
