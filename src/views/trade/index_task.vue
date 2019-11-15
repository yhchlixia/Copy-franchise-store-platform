<template>
  <div class="chapterer">
    <div class="moocRelate">
      <!-- 单元作业 -->
      <div class="trial">
        <h2 class="unit">单元作业</h2>
        <router-link to class="beset">常见问题</router-link>
        <div class="civi" @click="prevprev()">返回课程章节列表</div>
      </div>
      <div class="attention">
        <p class="liquor">单元作业添加注意事项:</p>
        <p class="Judgs">1.单元作业先后分为作业提交、作业批改、成绩评定三个阶段，请在设定截止时间时合理安排。</p>
        <p class="Judgs">2.如果作业的批改方式为学生互评批改且需要互评训练，请及时添加互评训练题目以免影响作业内容的添加与发布。</p>
        <p
          class="Judgs"
        >3.添加作业题目时，得分指导为答案的评分标准。一个题目可以有多个维度的得分指导，每个得分指导下需要提供具体的得分要求。具体得分要求中必须指定该得分指导下最高得分的具体要求。</p>
      </div>
      <div class="testinfo">
        <div class="rhythm">单元作业</div>
        <div class="publishTime">发布时间: 2019年6月13日 2:30</div>
      </div>
      <div class="fying">
        <el-steps :active="active" finish-status="success" simple style="margin-top: 20px">
          <!-- 进度条 -->
          <el-step title="1.输入作业基本信息"></el-step>
          <el-step title="2.添加作业题"></el-step>
        </el-steps>
      </div>
      <!-- 输入作业基本信息 -->
      <div class="basicInfo" v-if="active ===0">
        <!-- 单元作业说明 -->
        <div class="sic">
          <div class="stepinfo">单元作业说明：</div>
          <div style="width: 590px;height: 100px;display:inline-block;">
            <el-input
              type="textarea"
              placeholder
              v-model="operation.description"
              maxlength="200"
              show-word-limit
            ></el-input>
          </div>
        </div>
        <!-- 作业提交设置 -->
        <div class="submissioner">
          <h3>作业提交设置</h3>
          <div class="stepin">
            <div style="display:inline-block;float:left;width:13%;">
              <em>*</em>
              截止提交时间：
            </div>
            <div class="ubli" style="float:left;">
              <div class="chooser">
                <el-date-picker
                  v-model="operation.deadline"
                  type="datetime"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  placeholder="选择日期时间"
                ></el-date-picker>
              </div>
              <p
                style="color: #999;padding-top: 5px;font-size: 12px/1.5 'Arial', 'Hiragino Sans GB', 'Microsoft YaHei','SimSun',\5b8b\4f53, 'serif';height:18px;display:inline-block;float:left;"
              >超过指定时间未提交将受到相应惩罚或无测验成绩</p>
            </div>
          </div>
        </div>
        <!-- 作业批改评分设置 -->
        <div class="judegeblock">
          <h3>作业批改评分设置</h3>
          <div class="job">
            <div style="display:inline-block;float:left;width:13%;">
              <em>*</em>
              作业批改方式：
            </div>
            <div style="font-size:12px;display:inline-block;float:left;width:60%;">
              <el-radio v-model="operation.reviewPattern" :label="0">学生互评批改</el-radio>
              <el-radio v-model="operation.reviewPattern" :label="1">老师批改评分</el-radio>
            </div>
            <div class="hupingnode" v-if="operation.reviewPattern == '0'">
              <!-- 是否需要互评训练 -->
              <div class="mutual">
                <div style="display:inline-block;float:left;width:21%;">
                  <em>*</em>
                  是否需要互评训练：
                </div>
                <div style="font-size:12px;display:inline-block;float:left;width:60%;">
                  <el-radio v-model="operation.mutualEvaluation" :label="0">不需要</el-radio>
                  <el-radio v-model="operation.mutualEvaluation" :label="1">需要</el-radio>
                  <router-link to class="go">去添加互评练习</router-link>
                </div>
              </div>
              <div class="mutual" style="height:68px;">
                <div style="display:inline-block;float:left;width:21%;">
                  <em>*</em>
                  互评开放时间：
                </div>
                <div class="ubli" style="float:left;width:50%;">
                  <div class="chooser">
                    <el-date-picker
                      v-model="operation.meEndTime"
                      style="width:60%;"
                      type="datetime"
                      value-format="yyyy-MM-dd HH:mm:ss"
                      placeholder="选择日期时间"
                    ></el-date-picker>
                  </div>
                  <p
                    style="color: #999;padding-top: 5px;font-size: 12px/1.5 'Arial', 'Hiragino Sans GB', 'Microsoft YaHei','SimSun',\5b8b\4f53, 'serif';height:18px;display:inline-block;float:left;"
                  >互评时间后学生才能进行互评作业</p>
                </div>
              </div>
              <!-- 互评截止时间 -->
              <div class="mutual" style="height:68px;">
                <div style="display:inline-block;float:left;width:21%;">
                  <em>*</em>
                  互评截止时间：
                </div>
                <div class="ubli" style="float:left;width:50%;">
                  <div class="chooser">
                    <el-date-picker
                      v-model="operation.meBeginTime"
                      style="width:60%;"
                      type="datetime"
                      value-format="yyyy-MM-dd HH:mm:ss"
                      placeholder="选择日期时间"
                    ></el-date-picker>
                  </div>
                  <p
                    style="color: #999;padding-top: 5px;font-size: 12px/1.5 'Arial', 'Hiragino Sans GB', 'Microsoft YaHei','SimSun',\5b8b\4f53, 'serif';height:18px;display:inline-block;float:left;"
                  >互评截止后学生无法进行作业互评</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 成绩评定设置 -->
        <div class="submission">
          <h3>成绩评定设置</h3>
          <div class="stepin">
            <div style="display:inline-block;float:left;width:13%;">
              <em>*</em>
              成绩公布时间：
            </div>
            <div class="ubli" style="float:left;">
              <div class="chooser">
                <el-date-picker
                  v-model="operation.gradePublicTime"
                  type="datetime"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  placeholder="选择日期时间"
                ></el-date-picker>
              </div>
              <p
                style="color: #999;padding-top: 5px;font-size: 12px/1.5 'Arial', 'Hiragino Sans GB', 'Microsoft YaHei','SimSun',\5b8b\4f53, 'serif';height:18px;display:inline-block;float:left;"
              >该日期之后学生才能查看作业成绩, 在成绩公布之前老师可以修改作业成绩</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 添加考试 -->
      <div class="basicConfig" v-if="active ===1">
        <div
          style="background-color: #F8F8F8;margin-bottom: 30px;"
          v-for="(v,k) in answerion"
          :key="k"
        >
          <div class="hwpool">作业题{{k+1}}</div>
          <div class="wraper">
            <div style="height: 15px;"></div>
            <div style="padding-bottom: 20px;">
              <div class="homeworklist">1.题目录入并设定题目分值</div>
              <div style="width:50%;display:inline-block;float: left;">
                <el-input type="textarea"></el-input>
              </div>
              <div class="hwscore">
                <div class="hwtop">该题分值</div>
                <div class="hwsc">
                  <div class="baseinputui" style="display:inline-block;">
                    <input class="inputtxt" type="text" />
                  </div>
                  <div style="font-size:14px;display:inline-block;">分</div>
                </div>
                <div>
                  <div style="color: #999;font-size:12px;">（请输入1-100之间的整数）</div>
                </div>
              </div>
              <div class="attachment">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="fileLimit"
                  :on-exceed="handleExceed"
                  :file-list="fileList"
                >
                  <label>
                    <input
                      type="file"
                      id="file"
                      style="display: none;"
                      @change="handleFileChange()"
                    />
                    <div class="portrait">
                      <span>上传视频</span>
                    </div>
                    <div
                      slot="tip"
                      class="el-upload__tip">
                      只能上传txt、mp3、jpg、png、rar、zip、doc、ppt、xls、pdf文件，且不超过50M
                    </div>
                  </label>
                  <!-- <el-button size="small" type="primary" @change="handleFileChange()">点击上传</el-button>
                  <div
                    slot="tip"
                    class="el-upload__tip"
                  >只能上传txt、mp3、jpg、png、rar、zip、doc、ppt、xls、pdf文件，且不超过50M</div>
                  </el-upload>-->
                </el-upload>
              </div>
            </div>
            <div style="padding-bottom: 20px;">
              <div class="standard">
                <div>2.设定该题得分要求及具体得分标准</div>
                <p style="font-size: 12px;line-height: 18px;color: #666;">互评评分指导说明:</p>
                <ul style="font-size: 12px;line-height: 18px;color: #666;">
                  <li class="thirdth">该部分包括评分指导及具体得分标准两部分，建议按照“总-分”的思路填写；</li>
                  <li class="thirdth">评分指导可以为一个概括性的描述,也可为多个不同纬度的评分描述；例如该题主要考查句子的重音和语调问题，请以这两条为基本评分点；</li>
                  <li class="thirdth">具体的得分标为针对得分指导指定更加详细的具体得分标准，例如读音太慢、影响理解或引起误解仅得2分；</li>
                </ul>
              </div>
              <div style="height:10px"></div>
              <div style="margin-bottom: 25px;" v-for="(item,index) in scoring" :key="index">
                <div style="width:50%;display:inline-block;float: left;">
                  <el-input type="textarea" v-model="item.desc"></el-input>
                </div>
                <div class="hwscore">
                  <div class="hwtop">具体分值</div>
                  <div class="hwsc">
                    <div style="display:inline-block;">
                      <select name id v-model="v.name">
                        <option value></option>
                      </select>
                      <!-- <input  type="text" /> -->
                    </div>
                    <div style="font-size:14px;display:inline-block;">分</div>
                  </div>
                  <div>
                    <div style="color: #999;font-size:12px;">（各得分要求分值之和需为该题分值）</div>
                  </div>
                </div>
                <div style="display: inline-block;margin-left:2%">
                  <i class="el-icon-delete" @click="onDelete(k,index)"></i>
                </div>
              </div>
              <div>
                <a class="addrule" @click="requirements(k)">+继续添加答案得分要求</a>
              </div>
            </div>
            <div class="qbtns">
              <a class="defaultsave" @click="multiple(k)">保存</a>
              <a class="cancelOpt" @click="abolish(k)">取消</a>
            </div>
          </div>
        </div>
        <a
          style="display: block;margin-bottom: 24px;height: 38px;line-height: 38px;font-size: 14px;text-align: center;background-color: #eaeaea;"
          @click="addTitle"
        >+添加题目</a>
      </div>
      <div class="deployBtn">
        <el-button style="margin-top: 12px;" @click="prev" v-if="active==1">上一步</el-button>
        <el-button style="margin-top: 12px;" @click="next" v-if="active==0||active==1">下一步</el-button>
        <el-button style="margin-top: 12px;" @click="submit" v-if="active==2">提交</el-button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.chapterer {
  width: 85.6%;
  margin: auto;
  background-color: #fff;
  text-align: left;
}
.moocRelate {
  padding: 0 20px;
}
.trial {
  padding: 10px 0;
  border-bottom: none;
  height: 38px;
}
.unit {
  line-height: 38px;
  font-size: 18px;
  /* font-family: "Arial", "Hiragino Sans GB", "Microsoft YaHei",
    \5fae\8f6f\96c5\9ed1, "Helvetica", "sans-serif"; */
  float: left;
  font-weight: normal;
}
.trial .beset {
  color: #56b929;
  font-size: 12px;
  margin-left: 1%;
  line-height: 38px;
}
.trial .beset:hover {
  text-decoration: underline !important;
}
.civi {
  line-height: 38px;
  color: #65a200;
  font-size: 14px;
  float: right;
  cursor: pointer;
  /* font-family: "Arial", "Hiragino Sans GB", "Microsoft YaHei",
    \5fae\8f6f\96c5\9ed1, "Helvetica", "sans-serif"; */
}
.attention {
  padding: 10px;
  background-color: #ffffe8;
  height: 135px;
}
.liquor {
  color: red;
  margin-bottom: 5px;
  line-height: 26px;
  font-size: 12px;
}
.Judg {
  line-height: 52px;
  width: 100%;
  font-size: 12px;
  color: #333;
  height: 52px;
  display: inline-block;
}
.finite {
  border: 1px solid #87bd03;
  padding: 3px;
  color: #87bd03;
}
.Judgs {
  line-height: 26px;
  width: 100%;
  font-size: 12px;
  color: #333;
  height: 26px;
  display: inline-block;
}
.testinfo {
  padding: 30px 20px 10px 0px;
  height: 33px;
}
.rhythm {
  font-size: 22px;
  margin-right: 2%;
  float: left;
  /* font-family: "Arial", "Hiragino Sans GB", "Microsoft YaHei",
    \5fae\8f6f\96c5\9ed1, "Helvetica", "sans-serif"; */
}
.publishTime {
  color: #999;
  /* font-family: "Arial", "Hiragino Sans GB", "SimSun", \5b8b\4f53, "Georgia",
    "serif"; */
  float: left;
  margin-top: 1%;
  font-size: 12px;
}
.fying {
  margin-top: 15px;
  margin-bottom: 20px;
  height: 57px;
}
.el-steps--simple {
  width: 65%;
}
.sic {
  margin-top: 30px;
  margin-bottom: 10px;
  padding-bottom: 20px;
  border-bottom: 1px dashed #eee;
}
.stepinfo {
  line-height: 26px;
  font-size: 14px;
  width: 11%;
  /* font-family: "Arial", "Hiragino Sans GB", "Microsoft YaHei",
    \5fae\8f6f\96c5\9ed1, "Helvetica", "sans-serif"; */
  float: left;
}
.el-textarea__inner {
  width: 590px;
  height: 110px;
  background-color: #fafafa;
  font-size: 12px;
}
.unced {
  margin-bottom: 10px;
  padding-bottom: 20px;
  height: 56px;
}
.basesetting {
  width: 11%;
  line-height: 26px;
  font-size: 14px;
  /* font-family: "Arial", "Hiragino Sans GB", "Microsoft YaHei",
    \5fae\8f6f\96c5\9ed1, "Helvetica", "sans-serif"; */
  float: left;
}
.basesetting em {
  font-weight: bold;
  color: #cc3333;
  padding-right: 5px;
  vertical-align: middle;
  float: left;
}
.ubli {
  display: inline-block;
  width: 50%;
  float: left;
}
.chooser {
  width: 100%;
  display: inline-block;
  float: left;
}
.perioser {
  width: 45%;
  display: inline-block;
  float: left;
}
.rial {
  margin-bottom: 10px;
  padding-bottom: 20px;
  height: 37px;
}
.rialer {
  margin-bottom: 10px;
  padding-bottom: 20px;
  height: 37px;
}
.ss {
  line-height: 36px;
  margin-right: 5px;
  margin-left: 5px;
  float: left;
  width: 35%;
}
.ss input {
  vertical-align: middle;
}
.ss label {
  margin-left: 5px;
  vertical-align: middle;
  cursor: default;
  font-size: 12px;
  color: #333;
  line-height: 36px;
}
.stiff {
  width: 21%;
  display: inline-block;
  float: left;
}
.stif {
  width: 16%;
  display: inline-block;
  float: left;
}
.nputui {
  display: inline-block;
}
.nputui input {
  width: 52px;
  height: 34px;
  background-color: #fafafa;
  border: 1px solid #ddd;
}
.se {
  width: 50%;
  display: inline-block;
  float: left;
}
.se input {
  vertical-align: middle;
}
.se label {
  margin-left: 5px;
  vertical-align: middle;
  cursor: default;
  font-size: 12px;
  color: #333;
  line-height: 36px;
}
.inputwarp {
  margin-bottom: 10px;
  padding-bottom: 20px;
  height: 102px;
}
.choice {
  width: 60%;
  height: 102px;
  display: inline-block;
  float: left;
  /* background-color: skyblue; */
  font-size: 12px;
  color: #333;
}
.choice .WWW {
  width: 10%;
  height: 24px;
  padding: 5px;
  font-size: 12px;
  background: #fafafa;
  border: none;
  overflow-y: auto;
  overflow-x: hidden;
  resize: none;
  border: 1px solid #ddd;
}
.multiple {
  margin-bottom: 10px;
  padding-bottom: 20px;
  height: 52px;
}
.multiple .choice {
  width: 60%;
  height: 52px;
  display: inline-block;
  float: left;
  /* background-color: skyblue; */
  line-height: 26px;
}
.choice label {
  font-size: 12px;
  color: #333;
}
.tryinfo {
  width: 63%;
  color: #999;
  padding-top: 5px;
}
.questionnum {
  width: 100%;
  height: 41px;
  display: inline-block;
}
.individual {
  width: 30%;
  height: 24px;
  padding: 5px;
  font-size: 12px;
  background: #fafafa;
  border: none;
  overflow-y: auto;
  overflow-x: hidden;
  resize: none;
  border: 1px solid #ddd;
}
.qunum {
  display: inline-block;
  float: left;
  width: 20%;
}
.submission {
  padding: 25px 0;
  /* border-top: 1px dashed #eee; */
  /* height: 132px; */
}
.submission h3 {
  /* font-family: "Arial", "Hiragino Sans GB", "Microsoft YaHei",
    \5fae\8f6f\96c5\9ed1, "Helvetica", "sans-serif"; */
  line-height: 1.5;
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 25px;
}
.submissioner {
  padding: 25px 0;
  border-bottom: 1px dashed #eee;
  height: 132px;
}
.submissioner h3 {
  /* font-family: "Arial", "Hiragino Sans GB", "Microsoft YaHei",
    \5fae\8f6f\96c5\9ed1, "Helvetica", "sans-serif"; */
  line-height: 1.5;
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 25px;
}
.stepin {
  width: 100%;
  height: 63px;
  padding-bottom: 20px;
  font-size: 14px;
  /* font-family: "Arial", "Hiragino Sans GB", "Microsoft YaHei",
    \5fae\8f6f\96c5\9ed1, "Helvetica", "sans-serif"; */
  float: left;
}
.job {
  width: 100%;
  padding-bottom: 20px;
  font-size: 14px;
  /* font-family: "Arial", "Hiragino Sans GB", "Microsoft YaHei",
    \5fae\8f6f\96c5\9ed1, "Helvetica", "sans-serif"; */
  float: left;
  border-bottom: 1px dashed #eee;
}
.job em {
  font-weight: bold;
  color: #cc3333;
  padding-right: 5px;
  vertical-align: middle;
}
.stepin em {
  font-weight: bold;
  color: #cc3333;
  padding-right: 5px;
  vertical-align: middle;
}
.judegeblock {
  padding: 25px 0;
  /* border-top: 1px dashed #eee; */
  height: 96px;
}
.judegeblock h3 {
  /* font-family: "Arial", "Hiragino Sans GB", "Microsoft YaHei",
    \5fae\8f6f\96c5\9ed1, "Helvetica", "sans-serif"; */
  line-height: 1.5;
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 25px;
}
.job {
  padding-bottom: 20px;
}
.hupingnode {
  padding: 15px 10px;
  width: 60%;
  background-color: #f8f8f8;
  margin-top: 10px;
  display: inline-block;
}
.mutual {
  padding-bottom: 20px;
  height: 27px;
  font-size: 12px;
  color: #333;
}
.go {
  color: #56b929;
  cursor: pointer;
  margin-left: 1%;
}
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 40%;
}
.hwpool {
  height: 36px;
  line-height: 36px;
  background-color: #eaeaea;
  padding: 0 20px;
  font-size: 14px;
  /* font-family: "Arial", "Hiragino Sans GB", "Microsoft YaHei",
    \5fae\8f6f\96c5\9ed1, "Helvetica", "sans-serif"; */
}
.wraper {
  padding: 0 20px;
  background-color: #f8f8f8;
}
.homeworklist {
  line-height: 30px;
  font-size: 14px;
}
.hwscore {
  border-left: none;
  height: 145px;
  width: 156px;
  display: inline-block;
  border: 1px solid #ddd;
}
.hwtop {
  height: 38px;
  line-height: 38px;
  background: #eee;
  color: #333;
  text-align: center;
  border-bottom: 1px solid #ddd;
  font-size: 12px;
}
.hwsc {
  margin: 15px 30px 10px;
  text-align: center;
}
.baseinputui {
  width: 60px;
  height: 28px;
  border: 1px solid #ddd;
}
.inputtxt {
  width: 50px;
  height: 18px;
  background-color: #fff;
  padding: 5px;
  font-size: 12px;
  background: #fafafa;
  border: none;
  overflow-y: auto;
  overflow-x: hidden;
  resize: none;
}
.attachment {
  padding: 20px 20px 0;
}
.standard {
  line-height: 20px;
  font-size: 14px;
}
.thirdth {
  clear: none;
  list-style: disc inside;
}
.addrule {
  display: block;
  width: 65%;
  height: 36px;
  line-height: 36px;
  background-color: #eaeaea;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
}
.qbtns {
  border-top: 1px solid #eaeaea;
  padding: 10px 20px;
}
.defaultsave {
  height: 30px;
  line-height: 30px;
  padding: 0 4px;
  margin-right: 20px;
  background-color: #56b929;
  background-image: none;
  border: none;
  color: #fff;
  display: inline-block;
  border-radius: 4px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  min-width: 80px;
  /* font-family: "Arial", "Hiragino Sans GB", "Microsoft YaHei",
    \5fae\8f6f\96c5\9ed1, "Helvetica", "sans-serif"; */
}
.cancelOpt {
  color: #56b929;
  cursor: pointer;
  font-size: 12px;
}
</style>
<script>
import axios from "axios";
export default {
  created() {
    this.chapterId = this.$route.query.id;
    // console.log(this.chapterId);
    this.crea();
  },
  data() {
    return {
      chapterId: "",
      radio: "0",
      need: "0",
      active: 0,
      textarea: "",
      publish: "",
      ratory: false,
      toopenup: "",
      close: "",
      toopenupclose: "",
      fileList: [
        {
          name: " ",
          url: " "
        }
      ],
      answerion: [
        {
          name: " ",
          radio0_1: "",
          radio2: " ",
          loginer: false,
          scoring: [{ show: false, desc: "", _desc: "" }]
        }
      ],
      scoring: [
        {
          desc: "",
          _desc: "",
          show: false
        }
      ],
      fileLimit: 3,
      description: "",
      deadline: "",
      reviewPattern: "",
      gradePublicTime: "",
      mutualEvaluation: "",
      meBeginTime: "",
      meEndTime: "",
      operation: {
        description: "",
        deadline: "",
        reviewPattern: "",
        gradePublicTime: "",
        mutualEvaluation: "",
        meBeginTime: "",
        meEndTime: ""
      }
    };
  },
  methods: {
    //添加题目
    addTitle() {
      debugger
      let json_ = {};
      json_.name = "0";
      json_.radio2 = "0";
      json_.loginer = false;
      json_.scoring = [{ show: false, desc: "", _desc: "" }];
      json_.show = 0;
      this.answerion.push(json_);
      console.log("11113");
      // console.log(this.answer);
      // this.onClickPush()
    },
    //取消
    abolish(index) {
      this.answerion.splice(index, 1);
    },
    //继续添加得分要求
    requirements(k) {
      let json_ = {};
      json_.desc = "";
      json_._desc = "";
      json_.show = false;
      // this.A_List.push(json_)
      this.answerion[k].scoring.push(json_);
      // console.log("111");
      console.log(this.answerion[k]);
    },
    //删除
    onDelete(k, index) {
      this.answerion[k].scoring.splice(index, 1);
    },

    handleFileChange() {
      var typeID = this.$route.query.id;
      console.log(typeID, 1231321);
      var json_ = {};
      var file = document.getElementById("file");
      console.log(file);
      var formData = new FormData();
      formData.append("file", file.files[0]);
      var options = {
        // 设置axios向后台传入的参数
        url: "filex/VideoUpload?typeID=" + typeID + "", //请求路径 // formData
        data: formData,
        method: "post",
        headers: {}
      };
      axios(options).then(req => {
        axios.defaults.timeout = 90000;
        console.log(req); // 是这个url问题。。

        // console.log(fileName)

        // 判断弹框
        console.log(req);
        if (req.data.code == 0) {
          alert("上传视频成功!");
          this.urlname = req.data.data.name;
          this.fileName = req.data.data.fileName;
        } else if (req.data.code == 3000001) {
          alert("上传视频文件名重复");
        }
      });
    },
    //添加
    crea() {
      var chapterId = this.$route.query.id;
      axios({
        method: "get",
        url: "teacher/unitHomework/getTaskInfo?taskID=" + chapterId + ""
      }).then(req => {
        console.log(req);
        this.operation = req.data.data;
        console.log(this.operation);
      });
    },
    prev() {
      --this.active;
      if (this.active < 0) this.active = 0;
    },
    next() {
      this.active = 1;
      // var chapterId = this.$route.query.id;
      // var description = this.operation.deadline;
      // var reviewPattern = this.operation.reviewPattern;
      // var mutualEvaluation = this.operation.mutualEvaluation;
      // var meBeginTime = this.operation.meBeginTime;
      // var meEndTime = this.operation.meEndTime;
      // var gradePublicTime = this.operation.gradePublicTime;
      // axios({
      //   method: "put",
      //   url: "teacher/unitHomework/addOrUpdateBaseInfo",
      //   data: {
      //     taskId: chapterId,
      //     description: this.operation.description,
      //     deadline: this.operation.deadline,
      //     reviewPattern: this.operation.reviewPattern,
      //     mutualEvaluation: this.operation.mutualEvaluation,
      //     meBeginTime: this.operation.meBeginTime,
      //     meEndTime: this.operation.meEndTime,
      //     gradePublicTime: this.operation.gradePublicTime
      //   }
      // }).then(req => {
      //   console.log(req.data.code);
      //   if (req.data.code == 0) {
      //     if (this.active++ > 2) this.active = 0;
      //   } else {
      //     this.$message({
      //       message: req.data.msg,
      //       type: "warning"
      //     });
      //   }
      // });
    },
    multiple(k) {
      axios({
        method: "put",
        url: "teacher/unitHomework/addOrUpdateBaseInfo",
        data: {}
      }).then(req => {
        console.log(req);
      });
    },
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3);
    },
    prevprev() {
      this.$router.go(-1);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
};
</script>