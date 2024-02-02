migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("matb4hahzshobj6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "brke3cpx",
    "name": "imgurl",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "brke3cpx",
    "name": "imglink",
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
