migrate((db) => {
  const collection = new Collection({
    "id": "s8pflf7pogc0112",
    "created": "2023-07-15 12:03:13.802Z",
    "updated": "2023-07-15 12:03:13.802Z",
    "name": "accounts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cmaqf8ke",
        "name": "username",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "tdytkh3a",
        "name": "serial",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("s8pflf7pogc0112");

  return dao.deleteCollection(collection);
})
