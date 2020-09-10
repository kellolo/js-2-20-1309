function directSpeechQuotes(text) {
    return text.replaceAll(/\B'|'\B/g, '"');
}