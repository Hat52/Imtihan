#importing libraries
import spacy
from spacy.lang.en.stop_words import STOP_WORDS
from heapq import nlargest

#function to summarize text
def summarizer(text):
    nlp=spacy.load('en_core_web_sm')#loading model

    document=nlp(text)
    stop_words=list(STOP_WORDS)

    word_frequencies=dict()
    for word in document:
        if word.text not in stop_words:
            if word.text not in word_frequencies.keys():
                word_frequencies[word.text]=1
            else:
                word_frequencies[word.text]+=1

    maximum_frequency=(max(word_frequencies.values()))
    for word in word_frequencies:
        word_frequencies[word]=word_frequencies[word]/maximum_frequency

    sentences=[sentence for sentence in document.sents]

    sentence_scores={}
    for sentence in sentences:
        for word in sentence:
            if word.text.lower() in word_frequencies.keys():
                if len(sentence.text.split(' ')) < 30:
                    if sentence not in sentence_scores.keys():
                        sentence_scores[sentence]=word_frequencies[word.text.lower()]
                    else:
                        sentence_scores[sentence]+=word_frequencies[word.text.lower()]

    summarized_sentences=nlargest(3,sentence_scores,key=sentence_scores.get)                        
    final_sentences=[Ssentence.text for Ssentence in summarized_sentences]
    sumary=''.join(final_sentences).replace('\n','')
    print(f'orginal doc- {len(text)} || summarized doc- {len(sumary)}')
    return sumary


print(summarizer('''Released on April 24, 2012, Google Drive is a cloud-based file storage service from Google. It also offers a free software suite that includes a word processor, and many others for spreadsheets, presentations, drawings, and several others. Since Google Drive is an online service, it allows users to share files with one another, mutually edit documents, and synch their saved files across multiple devices'''))