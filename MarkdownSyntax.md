# A Guide on how to edit the Assignment/Experiment

## Quick Links
### [Heading Syntax](https://github.com/NexGenBIAS/BIAS/blob/master/MarkdownSyntax.md#headings)
- [h1](https://github.com/NexGenBIAS/BIAS/blob/master/MarkdownSyntax.md#h1-tag) | [h2](https://github.com/NexGenBIAS/BIAS/blob/master/MarkdownSyntax.md#h2-tag) | [h3](https://github.com/NexGenBIAS/BIAS/blob/master/MarkdownSyntax.md#h3-tag) | [h4](https://github.com/NexGenBIAS/BIAS/blob/master/MarkdownSyntax.md#h4-tag) | [h5](https://github.com/NexGenBIAS/BIAS/blob/master/MarkdownSyntax.md#h5-tag) | [h6](https://github.com/NexGenBIAS/BIAS/blob/master/MarkdownSyntax.md#h6-tag)

### [Paragraph Syntax](https://github.com/NexGenBIAS/BIAS/blob/master/MarkdownSyntax.md#paragraphs)

### [Line break Syntax](https://github.com/NexGenBIAS/BIAS/blob/master/MarkdownSyntax.md#line-breaks)

### [Text Highlighting Syntax](https://github.com/NexGenBIAS/BIAS/blob/master/MarkdownSyntax.md#text-highlighting)
- [Bold/Strong Syntax](https://github.com/NexGenBIAS/BIAS/blob/master/MarkdownSyntax.md#boldstrong)
- [Italics/Emphasis Syntax](https://github.com/NexGenBIAS/BIAS/blob/master/MarkdownSyntax.md#italicsemphasis)
- [Strikethrough Syntax](https://github.com/NexGenBIAS/BIAS/blob/master/MarkdownSyntax.md#strikethrough)

### [Blockquote Syntax](https://github.com/NexGenBIAS/BIAS/blob/master/MarkdownSyntax.md#blockquote)
- [Normal Blockquote Syntax](https://github.com/NexGenBIAS/BIAS/blob/master/MarkdownSyntax.md#normal-blockquote) | [Multi-paragraph Blockquote Syntax](https://github.com/NexGenBIAS/BIAS/blob/master/MarkdownSyntax.md#multi-paragraph-blockquote) | [Nested Blockquote Syntax](https://github.com/NexGenBIAS/BIAS/blob/master/MarkdownSyntax.md#nested-blockquote)

### [List Syntax](https://github.com/NexGenBIAS/BIAS/blob/master/MarkdownSyntax.md#lists)
- [Ordered List Syntax](https://github.com/NexGenBIAS/BIAS/blob/master/MarkdownSyntax.md#ordered-list) | [Nested Ordered List Syntax](https://github.com/NexGenBIAS/BIAS/blob/master/MarkdownSyntax.md#nested-ordered-list)
- [Unordered List Syntax](https://github.com/NexGenBIAS/BIAS/blob/master/MarkdownSyntax.md#unordered-list) | [Nested Unordered List Syntax](https://github.com/NexGenBIAS/BIAS/blob/master/MarkdownSyntax.md#nested-unordered-list)

### [Code Syntax](https://github.com/NexGenBIAS/BIAS/blob/master/MarkdownSyntax.md#code)
- [Word/Phrase as Code Syntax](https://github.com/NexGenBIAS/BIAS/blob/master/MarkdownSyntax.md#wordphrase-as-code)
- [Fenced Code Block Syntax](https://github.com/NexGenBIAS/BIAS/blob/master/MarkdownSyntax.md#fenced-code-blocks)

### [Image Syntax](https://github.com/NexGenBIAS/BIAS/blob/master/MarkdownSyntax.md#images)

## Headings
### H1 Tag
#### Markdown Syntax 1:
```
# Text
```
#### Markdown Syntax 2:
```
Text
====
```
#### HTML Syntax:
```
<h1>Text</h1>
```
### H2 Tag
#### Markdown Syntax 1:
```
## Text
```
#### Markdown Syntax 2:
```
Text
----
```
#### HTML Syntax:
```
<h2>Text</h2>
```
### H3 Tag
#### Markdown Syntax:
```
### Text
```
#### HTML Syntax:
```
<h3>Text</h3>
```
### H4 Tag
#### Markdown Syntax:
```
#### Text
```
#### HTML Syntax:
```
<h4>Text</h4>
```
### H5 Tag
#### Markdown Syntax:
```
##### Text
```
#### HTML Syntax:
```
<h5>Text</h5>
```
### H6 Tag
#### Markdown Syntax:
```
###### Text
```
#### HTML Syntax:
```
<h6>Text</h6>
```

## Paragraphs
#### Markdown Syntax:
```
Paragraph 1

Paragraph 2
```
#### HTML Syntax:
```
<p>Paragraph</p>
```

## Line Breaks
#### Markdown Syntax:
```
Text 1<space><space>
Text 2
```
#### HTML Syntax:
```
Text 1<br>
Text 2
```

## Text Highlighting
### Bold/Strong
#### Markdown Syntax:
```
**Text**
```
#### HTML Syntax 1:
```
<b>Text</b>
```
#### HTML Syntax 2:
```
<strong>Text</strong>
```
### Italics/Emphasis
#### Markdown Syntax 1:
```
*Text*
```
#### Markdown Syntax 2:
```
_Text_
```
#### HTML Syntax 1:
```
<i>Text</i>
```
#### HTML Syntax 2:
```
<em>Text</em>
```
### Strikethrough
#### Markdown Syntax:
```
~~Text~~
```
#### HTML Syntax 1:
```
<s>Text</s>
```
#### HTML Syntax 2:
```
<del>Text</del>
```

## Blockquote
### Normal Blockquote
#### Markdown Syntax:
```
> Text
```
### Multi-paragraph Blockquote
#### Markdown Syntax:
```
> Text 1
>
> Text 2
```
### Nested Blockquote
#### Markdown Syntax:
```
> Text 
>> Nested Text
```

## Lists
### Ordered List
#### Markdown Syntax:
```
1. Item 1
2. Item 2
...
N. Item N
```
#### HTML Syntax:
```
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    ...
    <li>Item N</li>
</ol>
```
> **TIP:** You can use different item markers using HTML (`<ol type="<Type>">...</ol>`)\
> The different types available are:
> - `type="1"`: Numbers (Default)
> - `type="A"`: Uppercase letters
> - `type="a"`: Lowercase letters
> - `type="I"`: Uppercase Roman numerals
> - `type="i"`: Lowercase Roman numerals
### Nested Ordered List
#### Markdown Syntax:
```
1. Item 1
2. Item 2
    1. Item 2-1
    ...
    N. Item 2-N
...
Item N
```
#### HTML Syntax:
```
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
        <ol>
            <li>Item 2-1</li>
            ...
            <li>Item 2-N</li>
        </ol>
    ...
    <li>Item N</li>
</ol>
```
> **NOTE:** An Ordered List can be started with any number and not just 1.
> - Markdown: `x. Item X`, `(x + 1). Item (X + 1)` ...
> - HTML: `<ol start="x"></ol>`
### Unordered List
#### Markdown Syntax:
```
- Item 1
...
- Item N
```
> **Tip:** To start an list item with a number, use a `\` after the number.\
> Example: `- 54164\ Text`

> **NOTE:** You can also use the following markers instead of `-`:
> - `*`
> - `+`
#### HTML Syntax:
```
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    ...
    <li>Item N</li>
</ul>
```
> **TIP:** You can use different item markers using HTML (`<ul style="list-style-type:<type>;">...</ul>`)\
> The different types available are:
> - `disc`: Sets the list item marker to a bullet (default)
> - `circle`: Sets the list item marker to a circle
> - `square`: Sets the list item marker to a square
> - `none`: The list items will not be marked
### Nested Unordered List
#### Markdown Syntax:
```
- Item 1
- Item 2
    - Item 2-1
    ...
    - Item 2-N
...
- Item N
```
#### HTML Syntax:
```
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
        <ul>
            <li>Item 2-1</li>
            ...
            <li>Item 2-N</li>
        </ul>
    ...
    <li>Item N</li>
</ul>
```

## Code
### Word/Phrase as Code
#### Markdown Syntax:
```
`Text`
```
> **TIP:** To include a single or multiple ``(`)`` in a code segment, use `(``)` to enclose the text\
> Example:
> ```
> ``Use `code` in your Markdown file.``
> ```
#### HTML Syntax:
```
<code>Text</code>
```
### Fenced Code Blocks
#### Markdown Syntax:
~~~
```
Text
```
~~~
> **TIP:** You can also use `(~~~)` instead of ``(```)`` for fenced code blocks

> **NOTE:** Use backticks ``(`)`` and not apostrophes `(')`