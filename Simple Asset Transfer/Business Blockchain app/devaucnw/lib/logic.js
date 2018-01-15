'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {org.devauction.trade} txp
 * @transaction
 */
function AssetTransfer(txp) {
    txp.trcomodity.owner = txp.newuserid;
    return getAssetRegistry('org.devauction.comodity')
    .then (function(assetRegistry){
        return assetRegistry.update(txp.trcomodity);
    });

 
}
