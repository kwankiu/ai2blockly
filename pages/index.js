import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import React from 'react';

import BlocklyComponent, { Block, Value, Field, Shadow, Category } from './blockly';

import BlocklyJS from 'blockly/javascript';

import '../lib/blocks/lists';
import '../lib/blocks/math';
import '../lib/blocks/customblocks';
import '../lib/generator/generator';

export default function Home() {

  const simpleWorkspace = React.createRef();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <BlocklyComponent ref={simpleWorkspace}
          readOnly={false} trashcan={true} media={'media/'}
          move={{
            scrollbars: true,
            drag: true,
            wheel: true
          }}
          initialXml={`
<xml xmlns="http://www.w3.org/1999/xhtml">
<block type="controls_ifelse" x="0" y="0"></block>
</xml>
      `}>

         <Category name="Logic" colour="#5b80a5">
            <Block type="controls_if"></Block>
            <Block type="logic_compare">
              <Field name="OP">EQ</Field>
            </Block>
            <Block type="logic_operation">
              <Field name="OP">AND</Field>
            </Block>
            <Block type="logic_negate"></Block>
            <Block type="logic_boolean">
              <Field name="BOOL">TRUE</Field>
            </Block>
            <Block type="logic_null"></Block>
            <Block type="logic_ternary"></Block>
          </Category>

          <Category name="Loops" colour="#5ba55b">
            <Block type="controls_repeat_ext">
              <Value name="TIMES">
                <Shadow type="math_number">
                  <Field name="NUM">10</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="controls_whileUntil">
              <Field name="MODE">WHILE</Field>
            </Block>
            <Block type="controls_for">
              <Field name="VAR" id="9fwU|.W7Evi@DR_sxl|m">i</Field>
              <Value name="FROM">
                <Shadow type="math_number">
                  <Field name="NUM">1</Field>
                </Shadow>
              </Value>
              <Value name="TO">
                <Shadow type="math_number">
                  <Field name="NUM">10</Field>
                </Shadow>
              </Value>
              <Value name="BY">
                <Shadow type="math_number">
                  <Field name="NUM">1</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="controls_forEach">
              <Field name="VAR" id="7r_u(XACK/f~iK`^U*d(">j</Field>
            </Block>
            <Block type="controls_flow_statements">
              <Field name="FLOW">BREAK</Field>
            </Block>
          </Category>

          <Category name="Math" colour="#5b67a5">
            <Block type="math_number">
              <Field name="NUM">0</Field>
            </Block>
            <Block type="math_arithmetic">
              <Field name="OP">ADD</Field>
              <Value name="A">
                <Shadow type="math_number">
                  <Field name="NUM">1</Field>
                </Shadow>
              </Value>
              <Value name="B">
                <Shadow type="math_number">
                  <Field name="NUM">1</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="math_single">
              <Field name="OP">ROOT</Field>
              <Value name="NUM">
                <Shadow type="math_number">
                  <Field name="NUM">9</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="math_trig">
              <Field name="OP">SIN</Field>
              <Value name="NUM">
                <Shadow type="math_number">
                  <Field name="NUM">45</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="math_constant">
              <Field name="CONSTANT">PI</Field>
            </Block>
            <Block type="math_number_property">
              <mutation divisor_input="false"></mutation>
              <Field name="PROPERTY">EVEN</Field>
              <Value name="NUMBER_TO_CHECK">
                <Shadow type="math_number">
                  <Field name="NUM">0</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="math_round">
              <Field name="OP">ROUND</Field>
              <Value name="NUM">
                <Shadow type="math_number">
                  <Field name="NUM">3.1</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="math_on_list">
              <mutation op="SUM"></mutation>
              <Field name="OP">SUM</Field>
            </Block>
            <Block type="math_modulo">
              <Value name="DIVIDEND">
                <Shadow type="math_number">
                  <Field name="NUM">64</Field>
                </Shadow>
              </Value>
              <Value name="DIVISOR">
                <Shadow type="math_number">
                  <Field name="NUM">10</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="math_constrain">
              <Value name="Value">
                <Shadow type="math_number">
                  <Field name="NUM">50</Field>
                </Shadow>
              </Value>
              <Value name="LOW">
                <Shadow type="math_number">
                  <Field name="NUM">1</Field>
                </Shadow>
              </Value>
              <Value name="HIGH">
                <Shadow type="math_number">
                  <Field name="NUM">100</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="math_random_int">
              <Value name="FROM">
                <Shadow type="math_number">
                  <Field name="NUM">1</Field>
                </Shadow>
              </Value>
              <Value name="TO">
                <Shadow type="math_number">
                  <Field name="NUM">100</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="math_random_float"></Block>
          </Category>

          <Category name="Text" colour="#5ba58c">
            <Block type="text">
              <Field name="TEXT"></Field>
            </Block>
            <Block type="text_join">
              <mutation items="2"></mutation>
            </Block>
            <Block type="text_append">
              <Field name="VAR" id="AS;K}z#9@UQF?7]l*B)x">item</Field>
              <Value name="TEXT">
                <Shadow type="text">
                  <Field name="TEXT"></Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="text_length">
              <Value name="Value">
                <Shadow type="text">
                  <Field name="TEXT">abc</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="text_isEmpty">
              <Value name="Value">
                <Shadow type="text">
                  <Field name="TEXT"></Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="text_indexOf">
              <Field name="END">FIRST</Field>
              <Value name="Value">
                <Block type="variables_get">
                  <Field name="VAR" id="*RyNd5SgHR`v#jVAXw7o">text</Field>
                </Block>
              </Value>
              <Value name="FIND">
                <Shadow type="text">
                  <Field name="TEXT">abc</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="text_charAt">
              <mutation at="true"></mutation>
              <Field name="WHERE">FROM_START</Field>
              <Value name="Value">
                <Block type="variables_get">
                  <Field name="VAR" id="*RyNd5SgHR`v#jVAXw7o">text</Field>
                </Block>
              </Value>
            </Block>
            <Block type="text_getSubstring">
              <mutation at1="true" at2="true"></mutation>
              <Field name="WHERE1">FROM_START</Field>
              <Field name="WHERE2">FROM_START</Field>
              <Value name="STRING">
                <Block type="variables_get">
                  <Field name="VAR" id="*RyNd5SgHR`v#jVAXw7o">text</Field>
                </Block>
              </Value>
            </Block>
            <Block type="text_changeCase">
              <Field name="CASE">UPPERCASE</Field>
              <Value name="TEXT">
                <Shadow type="text">
                  <Field name="TEXT">abc</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="text_trim">
              <Field name="MODE">BOTH</Field>
              <Value name="TEXT">
                <Shadow type="text">
                  <Field name="TEXT">abc</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="text_print">
              <Value name="TEXT">
                <Shadow type="text">
                  <Field name="TEXT">abc</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="text_prompt_ext">
              <mutation type="TEXT"></mutation>
              <Field name="TYPE">TEXT</Field>
              <Value name="TEXT">
                <Shadow type="text">
                  <Field name="TEXT">abc</Field>
                </Shadow>
              </Value>
            </Block>
          </Category>

          <Category name="Lists" colour="#745ba5">
            <Block type="lists_create_with">
              <mutation items="0"></mutation>
            </Block>
            <Block type="lists_create_with">
              <mutation items="3"></mutation>
            </Block>
            <Block type="lists_repeat">
              <Value name="NUM">
                <Shadow type="math_number">
                  <Field name="NUM">5</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="lists_length"></Block>
            <Block type="lists_isEmpty"></Block>
            <Block type="lists_indexOf">
              <Field name="END">FIRST</Field>
              <Value name="Value">
                <Block type="variables_get">
                  <Field name="VAR" id="@*pn3IZ+:)COuMCQvypY">list</Field>
                </Block>
              </Value>
            </Block>
            <Block type="lists_getIndex">
              <mutation statement="false" at="true"></mutation>
              <Field name="MODE">GET</Field>
              <Field name="WHERE">FROM_START</Field>
              <Value name="Value">
                <Block type="variables_get">
                  <Field name="VAR" id="@*pn3IZ+:)COuMCQvypY">list</Field>
                </Block>
              </Value>
            </Block>
            <Block type="lists_setIndex">
              <mutation at="true"></mutation>
              <Field name="MODE">SET</Field>
              <Field name="WHERE">FROM_START</Field>
              <Value name="LIST">
                <Block type="variables_get">
                  <Field name="VAR" id="@*pn3IZ+:)COuMCQvypY">list</Field>
                </Block>
              </Value>
            </Block>
            <Block type="lists_getSublist">
              <mutation at1="true" at2="true"></mutation>
              <Field name="WHERE1">FROM_START</Field>
              <Field name="WHERE2">FROM_START</Field>
              <Value name="LIST">
                <Block type="variables_get">
                  <Field name="VAR" id="@*pn3IZ+:)COuMCQvypY">list</Field>
                </Block>
              </Value>
            </Block>
            <Block type="lists_split">
              <mutation mode="SPLIT"></mutation>
              <Field name="MODE">SPLIT</Field>
              <Value name="DELIM">
                <Shadow type="text">
                  <Field name="TEXT">,</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="lists_sort">
              <Field name="TYPE">NUMERIC</Field>
              <Field name="DIRECTION">1</Field>
            </Block>
          </Category>

          <Category name="Colour" colour="#a5745b">
            <Block type="colour_picker">
              <Field name="COLOUR">#ff0000</Field>
            </Block>
            <Block type="colour_random"></Block>
            <Block type="colour_rgb">
              <Value name="RED">
                <Shadow type="math_number">
                  <Field name="NUM">100</Field>
                </Shadow>
              </Value>
              <Value name="GREEN">
                <Shadow type="math_number">
                  <Field name="NUM">50</Field>
                </Shadow>
              </Value>
              <Value name="BLUE">
                <Shadow type="math_number">
                  <Field name="NUM">0</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="colour_blend">
              <Value name="COLOUR1">
                <Shadow type="colour_picker">
                  <Field name="COLOUR">#ff0000</Field>
                </Shadow>
              </Value>
              <Value name="COLOUR2">
                <Shadow type="colour_picker">
                  <Field name="COLOUR">#3333ff</Field>
                </Shadow>
              </Value>
              <Value name="RATIO">
                <Shadow type="math_number">
                  <Field name="NUM">0.5</Field>
                </Shadow>
              </Value>
            </Block>
          </Category>
          <sep></sep>
          <Category name="Variables" colour="#a55b80" custom="VARIABLE"></Category>
          <Category name="Functions" colour="#995ba5" custom="PROCEDURE"></Category>
          <sep></sep>
          <Category name="List_AI2">
            <Block type="lists_add_items"><mutation items="1"></mutation></Block>
            <Block type="lists_is_in"></Block>
            <Block type="lists_is_empty"></Block>
            <Block type="lists_pick_random_item"></Block>
            <Block type="lists_position_in"></Block>
            <Block type="lists_select_item"></Block>
            <Block type="lists_insert_item"></Block>
            <Block type="lists_replace_item"></Block>
            <Block type="lists_append_list"></Block>
            <Block type="lists_remove_item"></Block>
            <Block type="lists_copy"></Block>
            <Block type="lists_is_list"></Block>
            <Block type="lists_reverse"></Block>
            <Block type="lists_to_csv_row"></Block>
            <Block type="lists_to_csv_table"></Block>
            <Block type="lists_from_csv_row"></Block>
            <Block type="lists_from_csv_table"></Block>
            <Block type="lists_lookup_in_pairs"></Block>
            <Block type="lists_join_with_separator"></Block>
          </Category>
          <Category name="Math_AI2">
            <Block type="math_number_radix"></Block>
            <Block type="math_bitwise"></Block>
            <Block type="math_random_set_seed"></Block>
            <Block type="math_divide"></Block>
            <Block type="math_convert_angles"></Block>
            <Block type="math_format_as_decimal"></Block>
            <Block type="math_convert_number"></Block>
          </Category>


          <Category name="Test Blocks">
            <Block type="test_react_field" />
            <Block type="test_react_date_field" />
            <Block type="controls_ifelse" />
            <Block type="logic_compare" />
            <Block type="logic_operation" />
            <Block type="controls_repeat_ext">
              <Value name="TIMES">
                <Shadow type="math_number">
                  <Field name="NUM">10</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="logic_operation" />
            <Block type="logic_negate" />
            <Block type="logic_boolean" />
            <Block type="logic_null" disabled="true" />
            <Block type="logic_ternary" />
            <Block type="text_charAt">
              <Value name="VALUE">
                <Block type="variables_get">
                  <Field name="VAR">text</Field>
                </Block>
              </Value>
            </Block>
            </Category>

          </BlocklyComponent>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
