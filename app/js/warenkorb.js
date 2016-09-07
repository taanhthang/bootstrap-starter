/**
 * Created by 4braun on 07.09.2016.
 */
simpleCart.bind( "afterAdd" , function( item ){
    console.log( item.get("name") + " was added to the cart!" );
});
// see if a new item has been added
simpleCart.bind( "afterAdd" , function( item , isNew ){
    if( isNew ){
        console.log( "A brand new item called " + item.get( 'name' ) + " was added to the cart" );
    }
});
// modify the items price based on weight
simpleCart.bind( "afterAdd" , function( item , isNew ){
    if( item.get( 'weight' ) > 10 ){
        item.price( 20 );
    } else {
        item.price( 15 );
    }
});