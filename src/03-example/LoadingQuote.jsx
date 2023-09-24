export const LoadingQuote = ({ isLoading }) => {
    if (isLoading)
        return (
            <div className="alert alert-info text-center">
                Loading...
            </div>
        )
}
