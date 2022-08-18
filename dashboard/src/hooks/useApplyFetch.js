import React from 'react';
    const successState = {
        data: null,
        isLoading: false,
        error: false
    }
    const errorState= {
        data: null,
        isLoading: false,
        error: true,
        errorMessage: 'No se encontraron datos'
    }
    const loadingState = {
        data: null,
        isLoading: true,
        error: false
    }

    const initialState = {
        data: null,
        isLoading: false,
        error: false
    }

const useApplyFetch = (url) => {
    const [state, setState] = React.useState(initialState)
    
    const fetchData = () => {
        setState(loadingState)
        fetch(url)
        .then(res => res.json())
        .then(data => {
            if(data){
                setState({...successState, data: data})
            } else {
                setState(errorState)
            }
        }).catch(error => {
            setState({...errorState, errorMessage: error})
        })
    }
    
    React.useEffect(()=>{
        fetchData()
    },[])

    return {...state, fetchData}
}

export default useApplyFetch;