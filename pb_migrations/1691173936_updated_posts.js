migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("matb4hahzshobj6")

  // remove
  collection.schema.removeField("hddqqytn")

  // remove
  collection.schema.removeField("brke3cpx")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("matb4hahzshobj6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hddqqytn",
    "name": "descripition",
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
})
