migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s8pflf7pogc0112")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kekqkgwz",
    "name": "bio",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "va3wbqs5",
    "name": "Location",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s8pflf7pogc0112")

  // remove
  collection.schema.removeField("kekqkgwz")

  // remove
  collection.schema.removeField("va3wbqs5")

  return dao.saveCollection(collection)
})
