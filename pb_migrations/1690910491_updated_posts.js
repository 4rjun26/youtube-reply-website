migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("matb4hahzshobj6")

  // remove
  collection.schema.removeField("xxxkmjwg")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("matb4hahzshobj6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xxxkmjwg",
    "name": "comments",
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
