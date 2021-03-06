/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import MarkdownDataProcessor from '../../src/gfmdataprocessor';
import { stringify } from '@ckeditor/ckeditor5-engine/src/dev-utils/view.js';

/**
 * Tests MarkdownDataProcessor.
 *
 * @param {String} markdown Markdown to be processed to view.
 * @param {String} viewString Expected view structure.
 * @param {String} [normalizedMarkdown] When converting back to the markdown it might be different than provided input
 * markdown string (which will be used if this parameter is not provided).
 */
export function testDataProcessor( markdown, viewString, normalizedMarkdown ) {
	const dataProcessor = new MarkdownDataProcessor();
	const viewFragment = dataProcessor.toView( markdown );

	// Check if view has correct data.
	expect( stringify( viewFragment ) ).to.equal( viewString );

	// Check if converting back gives the same result.
	const normalized = typeof normalizedMarkdown !== 'undefined' ? normalizedMarkdown : markdown;

	expect( dataProcessor.toData( viewFragment ) ).to.equal( normalized );
}
