import React, { Component } from 'react'
import AppURL from '../../api/AppURL';
import axios from 'axios';

class ReviewList extends Component {

    constructor() {
        super();
        this.state = {
            ReviewData: [],
        }
    }

    componentDidMount() {
        let code = this.props.code;
        axios.get(AppURL.ReviewList(code))
            .then(response => {
                this.setState({
                    ReviewData: response.data
                });
            })
            .catch(error => { console.log("API Error:", error); })
    }


    render() {

        const MyList = this.state.ReviewData;
        // let Myview = null;
        if (MyList.length > 0) {
            const Myview = MyList.map((ReviewList, i) => {
                if (ReviewList.reviewer_ratig === "1") {
                    return (<div>
                        <p className=" p-0 m-0"><span className="Review-Title">{ReviewList.reviewer_name}</span> <span className="text-success"><i className="fa fa-star"></i></span> </p>
                        <p>{ReviewList.reviewer_comments}</p>
                    </div>
                    )
                }
                else if (ReviewList.reviewer_ratig === "2") {
                    return (<div>
                        <p className=" p-0 m-0"><span className="Review-Title">{ReviewList.reviewer_name}</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i></span> </p>
                        <p>{ReviewList.reviewer_comments}</p>
                    </div>
                    )
                }
                else if (ReviewList.reviewer_ratig === "3") {
                    return (<div>
                        <p className=" p-0 m-0"><span className="Review-Title">{ReviewList.reviewer_name}</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i></span> </p>
                        <p>{ReviewList.reviewer_comments}</p>
                    </div>
                    )
                }
                else if (ReviewList.reviewer_ratig === "4") {
                    return (<div>
                        <p className=" p-0 m-0"><span className="Review-Title">{ReviewList.reviewer_name}</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                        <p>{ReviewList.reviewer_comments}</p>
                    </div>
                    )
                }
                else if (ReviewList.reviewer_ratig === "5") {
                    return (<div>
                        <p className=" p-0 m-0"><span className="Review-Title">{ReviewList.reviewer_name}</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
                        <p>{ReviewList.reviewer_comments}</p>
                    </div>
                    )
                } // end if else

               


            });
             return (

                    <div>
                        <h6 className="mt-2">REVIEWS</h6>
                        {Myview}
                    </div>
                )
        }
        else {
            return (

                <div>
                    <h6 className="mt-2">REVIEWS</h6>
                    <p>There have no reviews yet..</p>
                </div>
            )
        }

    }
}

export default ReviewList
