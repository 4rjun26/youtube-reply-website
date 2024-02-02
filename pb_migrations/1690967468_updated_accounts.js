migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s8pflf7pogc0112")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ul6at87r",
    "name": "followedppl",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ul6at87r",
    "name": "followings",
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
