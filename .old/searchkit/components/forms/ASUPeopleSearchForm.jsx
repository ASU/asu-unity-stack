import React from "react";
import PropTypes from 'prop-types';
import {
  SearchkitManager,
  SearchkitProvider,
  SearchBox,
  Hits,
  NoHits
} from "searchkit"

const HitItem = (props) => {

  const result = props.result;

  return (
    <div>
      <img width="100px" height="auto" src={result._source.photoUrl}/>
      <div>{result._source.displayName}</div>
    </div>
  )
}

const ASUPeopleSearchForm = props => {
    //todo: configure this as a prop
    const host = "https://7nf0b8hv1d.execute-api.us-west-2.amazonaws.com/dev/isearchproxydataload/isearchfull"

    if (!props.apikey.length) {
      return (<div>Please provide a valid ASU API key</div>)
    }

    const searchkit = new SearchkitManager(host, {
      httpHeaders:{
        'x-api-key': props.apikey,
        'Content-Type': 'application/json'
      }
    });

    return (
      <SearchkitProvider searchkit={searchkit}>
        <div>
            <SearchBox 
              searchOnChange={true}
              queryOptions={{analyzer:"standard"}}
              queryFields={["displayName"]}/>
            <Hits
              hitsPerPage={50} 
              highlightFields={["displayName"]} 
              itemComponent={HitItem}
            />
            <NoHits 
              translations={{
                "NoHits.NoResultsFound":"No people were found for {query}",
                "NoHits.DidYouMean":"Search for {suggestion}"
              }} 
              suggestionsField="displayName"
            />
        </div>
      </SearchkitProvider>
    );
};

ASUPeopleSearchForm.propTypes = {
    apikey: PropTypes.string
};

HitItem.propTypes = {
  result: PropTypes.object
};

export default ASUPeopleSearchForm;