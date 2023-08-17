import React from 'react';
import Listing from "./Listing";


function createEntry(listing){
    return (
      <Listing
      key={listing.id}
      emoji={listing.emoji}
      name ={listing.name}
      meaning = {listing.meaning}
      />
    )
  }

  export default createEntry;