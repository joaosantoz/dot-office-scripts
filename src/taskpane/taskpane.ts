/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

// images references in the manifest
import "../../assets/icon-16.png";
import "../../assets/icon-32.png";
import "../../assets/icon-80.png";
import tableModels from "./tableModels";

class TableImage {
  private imageModels: string[] = [
    "imgcenter",
    "imgside",
    "imgupside",
    "imgcentercaption",
    "iconsidetext"
  ];

  private createTable(tableType: string) {
    document.getElementById(tableType)
      .addEventListener("click", () => addTable(tableType));
  };

  public createAllTables() {
    this.imageModels.map((model: string) => {
      this.createTable(model);
    });
  }
}

const Tables = new TableImage();
/* global document, Office, Word */
Office.onReady((info) => {
  if (info.host === Office.HostType.Word) {
    document.getElementById("sideload-msg").style.display = "none";
    document.getElementById("app-body").style.display = "flex";

    Tables.createAllTables();
  }
});

export async function addTable(tableType: string) {
  const choice: string = tableModels[tableType];

  return Word.run(async (context: Word.RequestContext) => {
    context.document.body.insertHtml(choice, Word.InsertLocation.end);
    await context.sync();
  });
}