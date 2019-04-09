import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {
        if (dish == null) {
            return (
                <div/>
            );
        } else {
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
    }

    renderComments(dish) {
        if (dish === undefined || dish.comments === null || dish.comments.length === 0) {
            return (
                <div/>
            );
        } else {

            const comments = dish.comments.map((comment) => {
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
                    {comments}
                </div>
            );
        }
    }

    render() {

        return (
            <div class="container">
                <div className="row">
                    {this.renderDish(this.props.selectedDish)}
                    {this.renderComments(this.props.selectedDish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;
