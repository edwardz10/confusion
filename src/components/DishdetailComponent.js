import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

function RenderDish({dish}) {
    return (
        <div className="col-12 col-xs-5 col-sm-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments}) {
    if (comments === null || comments.length === 0) {
        return (
            <div/>
        );
    } else {

        const commentsDisplayed = comments.map((comment) => {
            return (
                <div>
                    {comment.comment}
                    <p>
                        -- {comment.author},
                        {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(Date.parse(comment.date)))}
                    </p>
                </div>
            );
        });

        return (
            <div className="col-12 col-xs-5 col-sm-5 m-1">
                <h4>Comments</h4>
                {commentsDisplayed}
            </div>
        );
    }
}

const DishDetail = (props) => {
    if (props.selectedDish != null) {
        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.selectedDish}/>
                    <RenderComments comments={props.selectedDish.comments}/>
                </div>
            </div>
        );
    } else {
        return <div/>;
    }
}

export default DishDetail;
