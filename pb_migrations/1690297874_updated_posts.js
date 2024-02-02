migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("matb4hahzshobj6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fgs4t1t9",
    "name": "tags",
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
  const collection = dao.findCollectionByNameOrId("matb4hahzshobj6")

  // remove
  collection.schema.removeField("fgs4t1t9")

  return dao.saveCollection(collection)
})
