migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s8pflf7pogc0112")

  // remove
  collection.schema.removeField("lartzdmd")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s8pflf7pogc0112")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lartzdmd",
    "name": "followers",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
