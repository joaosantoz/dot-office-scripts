/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

// images references in the manifest
import "../../assets/icon-16.png";
import "../../assets/icon-32.png";
import "../../assets/icon-80.png";

/* global document, Office, Word */

Office.onReady((info) => {
    if (info.host === Office.HostType.Word) {
        document.getElementById("sideload-msg").style.display = "none";
        document.getElementById("app-body").style.display = "flex";
        document.getElementById("image-center").onclick = imageCenter;
    }
});

export async function imageCenter(tableType) {
    return Word.run(async (context) => {
        context.document.body.insertHtml(
            `<table>
                  <tr>
                      <td>
                        <span style="background: #00ffff">Imagem centralizada</span>
                      </td>
                  </tr>
                  <tr>
                      <td style="text-align: center">
                        <span style="background: #00ffff"><br/>G_ ou S_</span>
                      </td>
                  </tr>
                  <tr>
                      <td style="background: #d0cece">Fonte:</td>
                  </tr>
                </table>`,
            Word.InsertLocation.end
        );
        await context.sync();
    });
}

export async function tableImage(tableType) {
    return Word.run(async (context) => {
        context.document.body.insertHtml(
            `<table>
                    <thead>
                    <tr>
                        <th colSpan="2"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td rowSpan="2"></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                    </tr>
                    </tbody>
                </table>`,
            Word.InsertLocation.end
        );
        await context.sync();
    });
}
