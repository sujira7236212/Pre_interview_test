"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
function merge(collection_1, collection_2, collection_3) {
    const reversec3 = [];
    for (let i = collection_3.length - 1; i >= 0; i--) {
        reversec3.push(collection_3[i]);
    }
    const mergec1c2 = [];
    let i = 0;
    let j = 0;
    while (i < collection_1.length && j < collection_2.length) {
        if (collection_1[i] <= collection_2[j]) {
            mergec1c2.push(collection_1[i]);
            i++;
        }
        else {
            mergec1c2.push(collection_2[j]);
            j++;
        }
    }
    while (i < collection_1.length) {
        mergec1c2.push(collection_1[i]);
        i++;
    }
    while (j < collection_2.length) {
        mergec1c2.push(collection_2[j]);
        j++;
    }
    const mergeall = [];
    let k = 0;
    let l = 0;
    while (k < mergec1c2.length && l < reversec3.length) {
        if (mergec1c2[k] <= reversec3[l]) {
            mergeall.push(mergec1c2[k]);
            k++;
        }
        else {
            mergeall.push(reversec3[l]);
            l++;
        }
    }
    while (k < mergec1c2.length) {
        mergeall.push(mergec1c2[k]);
        k++;
    }
    while (l < reversec3.length) {
        mergeall.push(reversec3[l]);
        l++;
    }
    return mergeall;
}
