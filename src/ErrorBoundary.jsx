import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: "" };
    }

    static getDerivedStateFromError(error) {
        // this.state.error = error;
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("error ", errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return this.state.error;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;