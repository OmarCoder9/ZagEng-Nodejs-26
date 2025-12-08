# HTML Documentation & Study Notes

This document contains a summary of HTML tags, attributes, and their functionalities based on the provided source code.

## 1. Basic Document Structure & Meta Tags

* **`<!DOCTYPE html>`**: Defines the document type.
* **`<html>`**: The root element of the page.
* **`<head>`**: Contains meta-information about the document.
    * `<meta charset="UTF-8" />`: Used to read/support all languages (character encoding).
    * `<meta name="description" content="..." />`: Used to write a description for search engines.
    * `<title>`: Sets the title of the webpage (appears in the browser tab).
    * `<style>`: Used to write internal CSS.
    * `<script>`: Used to write internal JavaScript.
    * `<link>`: Used to link external resources (like CSS files).

## 2. Text Formatting

Tags used to format text appearance and hierarchy.

| Tag | Description |
| :--- | :--- |
| `<h1>` to `<h6>` | Headings (h1 is the largest, h6 is the smallest). |
| `<p>` | Paragraph tag. |
| `<b>` | Bold text. |
| `<strong>` | Bold text (indicates importance). |
| `<i>` | Italic text. |
| `<em>` | Italic text (indicates emphasis/importance). |
| `<mark>` | Highlights text. |
| `<u>` | Underlines text. |
| `<small>` | Makes text smaller than the surrounding text. |
| `<del>` | Represents deleted text (strikethrough). |
| `<sup>` | Superscript (e.g., X<sup>3</sup>). |
| `<sub>` | Subscript (e.g., H<sub>2</sub>O). |

## 3. Links (Anchors)

The `<a>` tag is used to create hyperlinks.

**Attributes:**
* `href`: The destination URL.
* `target="_blank"`: Opens the link in a new tab.
* `title`: Displays a message when hovering over the link.

**Types of Links:**
1. **External:** Links to other websites (e.g., Google, YouTube).
2. **Local:** Links to other pages in the same project (e.g., `assignment.html`).
3. **Internal (Anchor):** Links to a specific section on the same page using IDs.
    * *Usage:* `<a href="#2027">Go</a>` jumps to `<p id="2027">`.
4. **Email:** Opens the default mail app (`mailto:email@example.com`).

## 4. Images

The `<img>` tag is used to embed images.

**Attributes:**
* `src`: The source of the image.
* `alt`: Alternate text displayed if the image fails to load or for screen readers.

**Ways to import images:**
1. **Online URL:** Paste the direct link to the image in `src`.
2. **Local File (Same Folder):** Just use the filename (e.g., `image.jpg`).
3. **Local File (Different Folder):** Use the path.
    * *Forward:* `folder/image.jpg`
    * *Backward:* `../image.jpg`

## 5. Lists

### Unordered List (`<ul>`)
Creates a bulleted list.
* Items are wrapped in `<li>`.

### Ordered List (`<ol>`)
Creates a numbered list (1, 2, 3...).
* **Attributes:**
    * `reversed`: Counts backwards (3, 2, 1).
    * `start="number"`: Starts counting from a specific number.
    * `type="A"`: Changes numbering style (e.g., A, B, C or I, II, III).

### Description List (`<dl>`)
* `dt`: The term.
* `dd`: The description/definition of the term.

## 6. Tables

Used to display data in rows and columns.

* `<table>`: Container for the table.
* `<caption>`: A title/caption for the table.
* `<thead>`: Groups the header content.
* `<th>`: Table Header cell (bold and centered).
* `<tbody>`: Groups the body content.
* `<tr>`: Table Row.
* `<td>`: Table Data cell.
* `<tfoot>`: Groups the footer content.
* `colspan="n"`: Merges *n* columns into one cell.

## 7. Layout and grouping

* **`<span>`**: Inline container used to style a specific word or phrase without affecting the whole paragraph.
* **`<div>`**: Block-level container used to group elements together (often for CSS layout).
* **`<br />`**: Line break (ends the current line).
* **`<hr>`**: Horizontal rule (creates a dividing line).

**HTML Entities:**
* `&lt;` displays `<` (less than).
* `&gt;` displays `>` (greater than).

## 8. Media (Audio & Video)

**Common Attributes:**
* `controls`: Adds play/pause buttons, volume, etc.
* `autoplay`: Starts media automatically (often blocked by browsers unless muted).
* `loop`: Repeats the media infinitely.
* `muted`: Starts the media with sound off.

### Audio (`<audio>`)
* Modern browsers support `.mp3`.
* Uses `<source>` tags to provide multiple formats (browser chooses the best one).

### Video (`<video>`)
* Modern browsers support `.mp4`.
* **Additional Attributes:**
    * `width` / `height`: Sets dimensions.
    * `poster`: Image shown while the video loads.
* **`<track>`**: Used for subtitles and captions.

## 9. Forms

The `<form>` tag collects user input.

**Input Types (`<input type="...">`):**
* `text`: Standard text box.
* `password`: Hides characters (dots/asterisks).
* `email`: Validates for email format.
* `range`: Slider control.
* `number`: Numeric input only.
* `radio`: Select only one option from a group (must share the same `name`).
* `checkbox`: Select multiple options.
* `file`: Upload a file.
* `search`: Search field.
* `url`: Validates for URL format.
* `date`, `month`, `time`: Pickers for specific time formats.
* `submit`: Button to send data.
* `reset`: Button to clear the form.

**Input Attributes:**
* `placeholder`: Hint text inside the box.
* `required`: Field must be filled before submitting.
* `disabled`: Input cannot be used or clicked (not sent to backend).
* `readonly`: Input can be read but not changed.
* `value`: The default value.
* `name`: The identifier used by the backend.

**Other Form Elements:**
* `<label>`: Caption for an item (use `for="id"` to link to input).
* `<select>` & `<option>`: Dropdown menu.
    * `<optgroup>`: Groups options inside the dropdown.
* `<textarea>`: Multi-line text input.
* `<datalist>`: Provides autocomplete suggestions for an input.

## 10. Miscellaneous Tags

* **`<q>`**: Short inline quotation.
* **`<blockquote>`**: Block-level quotation.
* **`<pre>`**: Preformatted text (preserves spaces and line breaks).
* **`<code>`**: Used to display code snippets.
* **`<iframe>`**: Embeds another website within the current page.
* **`<wbr>`**: Word break opportunity (where a line *can* break).
* **`<bdi>`**: Bi-directional Isolation (isolates text direction, e.g., Arabic mixed with English).