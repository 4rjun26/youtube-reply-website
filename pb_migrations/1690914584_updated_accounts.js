migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s8pflf7pogc0112")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yvbrafqb",
    "name": "avatar",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s8pflf7pogc0112")

  // remove
  collection.schema.removeField("yvbrafqb")

  return dao.saveCollection(collection)
})
