interface PlacesResponse {
    id:              number;
    slug:            string;
    city_slug:       string;
    display:         string;
    ascii_display:   string;
    city_name:       string;
    city_ascii_name: string;
    state:           string;
    country:         string;
    lat:             string;
    long:            string;
    result_type:     string;
    popularity:      string;
    sort_criteria:   number;
}

export default PlacesResponse;