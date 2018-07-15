import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: 1,
            correctAnswers: 0,
            questionShown: true,
        }
        this.submitCorrectAnswer = this.submitCorrectAnswer.bind(this);
        this.submitIncorrectAnswer = this.submitIncorrectAnswer.bind(this);
        this.showAnswerOrQuestion = this.showAnswerOrQuestion.bind(this);
    }

    submitCorrectAnswer() {
        this.setState({
            currentQuestion: this.state.currentQuestion + 1,
            correctAnswers: this.state.correctAnswers + 1,
        });
    }

    submitIncorrectAnswer() {
        this.setState({
            currentQuestion: this.state.currentQuestion + 1
        });
    }

    showAnswerOrQuestion() {
        this.setState({
            questionShown: !this.state.questionShown
        });
    }

    render() {
        const { deckTitle } = this.props.navigation.state.params;
        const currentDeck = this.props.decks[deckTitle];
        const questions = currentDeck.questions;
        const totalQuestions = questions.length;

        return (
            <View style={styles.container}>
                {this.state.currentQuestion <= totalQuestions  ?
                <View>
                    <Text style={styles.score}>
                        {this.state.currentQuestion}/{totalQuestions}
                    </Text>
                        <Text style={styles.question}>
                            {this.state.questionShown ? 
                            questions[this.state.currentQuestion - 1].question :
                            questions[this.state.currentQuestion - 1].answer}
                        </Text>
                        <TouchableOpacity 
                            onPress={this.showAnswerOrQuestion}>
                            <Text style={styles.answer}>
                                {this.state.questionShown ? 'Answer' : 'Question'}
                            </Text>
                        </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.submitCorrectAnswer}
                        style={styles.correctBtn}>
                        <Text style={styles.textBtn}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.submitIncorrectAnswer}
                        style={styles.incorrectBtn}>
                        <Text style={styles.textBtn}>Incorrect</Text>
                    </TouchableOpacity>
                </View>:
                <Text style={styles.result}>
                Quiz is over! Your score is {(this.state.correctAnswers * 100/totalQuestions).toFixed(1)}%
                </Text>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    correctBtn: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 7,
        height: 45,
        width: 200,
        marginBottom: 40,
    },
    incorrectBtn: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 7,
        height: 45,
        width: 200,
        marginBottom: 40,
    },
    textBtn: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '700',
    },
    score: {
        textAlign: 'center',
        marginBottom: 40,
    },
    question: {
        textAlign: 'center',
        marginBottom: 40,
        fontSize: 22,
        maxWidth: 300,
    },
    answer: {
        textAlign: 'center',
        fontSize: 16,
        color: 'red',
        marginBottom: 40,
    },
    result: {
        fontSize: 16,
        fontWeight: '500',
    },
});

function mapStateToProps (decks) {
    return {
        decks
    }
}
export default connect(mapStateToProps)(Quiz);