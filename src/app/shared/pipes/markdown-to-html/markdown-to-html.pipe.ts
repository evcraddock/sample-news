import {Pipe, PipeTransform} from '@angular/core';
import * as marked from 'marked';

@Pipe({
    name: 'MarkdownToHtml'
})

export class MarkdownToHtmlPipe implements PipeTransform {
    public static setOptions(options: MarkedOptions): void {
        marked.setOptions(options);
    }

    public transform(markdown: string, options?: MarkedOptions): string {
        if (markdown == null) {
            return '';
        };
        return marked(markdown, options).trim();
    }
}
