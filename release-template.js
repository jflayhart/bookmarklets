//The PR hasn't been created so there is no PR number yet
if (document.querySelector('.gh-header-new-pr')) {
    alert('Please run PR Autofill after the Pull Request has been created.')
} else {
    let prDescription = document.querySelector('[name="pull_request[body]"]').value

    const prNumberSelector = document.querySelector('.gh-header-number')

    // Get the PR number and replace it in the PR description
    if (prNumberSelector) {
        const prNumber = prNumberSelector.innerText.replace('#', '')
        prDescription = prDescription.replace('<insert PR # here>', prNumber)
    }
    
    // Rename PR title
    const prTitleSelector = document.querySelector('.js-issue-title')
    prTitleSelector.innerText.replace(prTitleSelector.innerText, '[RC] ' + prTitleSelector.innerText)

    // Replace the PR description's textarea value
    document.querySelector('[name="pull_request[body]"]').value = prDescription

    // Click the update button
    document.querySelector('.comment-form-actions button[type="submit"]').click()
}
